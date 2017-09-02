let env = {
	NODE_ENV: 'development',
	PORT: 3000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'darryl',
	DBPASSWORD: 'darryl',
	DBHOST: 'ds047166.mlab.com:47166',
	DBNAME: 'magicandmythoscards',
	SERVERNAME: 'API-Server'
}

// MAPS env TO ACTUAL ENVIRONMENT
Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
})

// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env