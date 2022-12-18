# Dictionary

Simple English dictionary to find definitions, examples and pronunciations.

# Tech used

- [Vue.js](https://vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [FontAwesome](https://fontawesome.com/)
- [lodash.debounce](https://www.npmjs.com/package/lodash.debounce)
- [Oxford Dictionaries API](https://developer.oxforddictionaries.com/)

# Deployment

## Heroku

To push the app/server to the corresponding heroku remote, which will trigger a new deployment:

`$ git subtree push --prefix app heroku-remote-name master`

To see remotes:

`$ git remote -v`

To add heroku remote:

`$ heroku git:remote -a heroku-app-name -r remote-name`

In case it's needed, to clean heroku remote (using [heroku-repo](https://github.com/heroku/heroku-repo) plugin)

`$ heroku repo:reset -a heroku-app-name`

For further information read:
https://dev.to/jmbejar/how-to-quickly-deploy-a-vuejs-app-to-heroku-5b0f
