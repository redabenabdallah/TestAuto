pipeline {
    agent any

    tools {nodejs "Node12"}

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
            }
        }
        stage('e2e Tests') {
            steps {
                bat 'set CYPRESS_VERIFY_TIMEOUT=120000'
                bat 'npm run cy:run'
				publishHTML([
					allowMissing: false,
					alwaysLinkToLastBuild: false,
					keepAll: true,
					reportDir: 'cypress/reports/html',
					reportFiles: 'index.html',
					reportName: 'HTML Report', 
					reportTitles: ''])
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    //post {
    //always {
      //  junit '**/results/*.xml'
        //   }
   //}
}