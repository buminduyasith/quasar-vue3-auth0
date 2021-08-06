import { boot } from 'quasar/wrappers'
import { setupAuth } from '../auth'
import authConfig from '../../auth_config'


export default boot(async ({ app, router }) => {

  const auth = await setupAuth(authConfig, (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : '/'
    );
  });

  app.use(auth);

})
