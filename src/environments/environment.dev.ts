export const environmentDev = {
  baseUrl: '/host',
  production: false,
  api:{
    endpoint:{
      login: 'token/',
      users:{
        getAll: 'users/',
        create: 'users/',
        update: 'users/',
        delete: 'users/',
      },
      teachers:{
        getAll: 'teachers/',
        create: 'teachers/',
        update: 'teachers/',
        delete: 'teachers/',
      },
      students:{
        getAll: 'students/',
        create: 'students/',
        update: 'students/',
        delete: 'students/',
      },
    }
  }
}
