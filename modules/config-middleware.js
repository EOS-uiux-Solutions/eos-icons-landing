const fs = require('fs')
const fetch = require('node-fetch')
const configData = JSON.parse(fs.readFileSync('./config.json'), 'utf8')


/* Initial middleware based on config file */
const projectConfig = async (req, res, next) => {

  /* Define Querys for GraphQL */
  const appQuery = `application(id: "5c6fb27500382c04d13c5ef6"){name brand showLanding showChangelog enableFeedback enableGTM}, pages{title, description, path, enabled}`

  /* Get query result */
  const app = await strapiGraphql(appQuery)

  /* Remeber the path for future implementation */
  const requestRoute = req.originalUrl

  /* Reduce the route response to new object */
  const routes = await app.data.pages.reduce((acc, cur) => {
    /* acc = accumulator , cur = current item */
    acc[cur.path] = {
      title: cur.title,
      description: cur.description,
      enabled: process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development' ? true : cur.enabled
    }

    return acc
  }, {})

  const docEnabled = await app.data.pages.reduce((acc, cur) => {
    /* acc = accumulator , cur = current item */
    acc[cur.path] = {
      enabled: process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development' ? true : cur.enabled
    }

    return acc
  }, {})


  /* Send the object with res.locals so we can use the props inside our views. */
  res.locals.config = app.data.application
  res.locals.stylesheetURL = configData.colors.stylesheetURL
  res.locals.docEnabled = docEnabled

  /*
    When the request is made, we check if the route correspondes to one of our
    defined routes, if they exist we create the locals for title and description.
    If we declare them outside this condition the API's would break
  */
  if (routes[requestRoute]) {
    const { title, description } = routes[requestRoute]
    res.locals.docTitle = title
    res.locals.docDescription = description
  } else {
    /* Set some default values for locals */
    res.locals.docTitle = 'EOS Design System'
    res.locals.docDescription = `{ SET DESCRIPTION }`
  }

  /* Handle next and redirect for route request, if the route is not defined we allow it */
  if (routes[requestRoute] && routes[requestRoute].enabled || !routes[requestRoute]) {
    next()
  }else {
    res.redirect('/dashboard')
  }
}

/* Strapi graphql query result.
  ========================================================================== */
const strapiGraphql = async (query) => {
  const { strapiURL } = configData

  /* Fetch graphql with the query */
  const request = await fetch(`${strapiURL}/graphql?query={${query}}`)
  const data = request.json()

  return data
}

module.exports = projectConfig
