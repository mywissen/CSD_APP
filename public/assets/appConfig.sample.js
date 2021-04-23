// set your account sid here
var accountSid = "AC387561c4b89e34f8eac3cc85e79f9223";


var appConfig = {
  sso: {
    accountSid: accountSid
  },
  logLevel: "debug",
  componentProps: {
    CRMContainer: {
      uriCallback: (task) => {
        console.log('task',task);
        return "http://bing.com"
      } 
    }
  },
  router: {
    type: "memory",
    history: {
      initialEntries: [ "/agent-desktop" ]
    }
  }
}