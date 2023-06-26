pipeline {
    agent any

    tools {nodejs "Node12"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
            }
        }
        stage('e2e Tests') {
            steps {
                bat 'npm run cypress'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}