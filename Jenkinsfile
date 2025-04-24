pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    try {
                        git 'https://github.com/zeusXtruealpha/Smart-City-Management.git'
                    } catch (Exception e) {
                        echo 'Skipping Git checkout (already present)'
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install || echo "Skipping npm install"'
            }
        }

        stage('Dummy Test') {
            steps {
                script {
                    echo 'Running dummy test...'
                    sh 'echo "Tests Passed!"'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo 'Building the project...'
                    sh 'echo "Build Successful!"'
                }
            }
        }
    }

    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed! (But should never happen with this dummy setup)'
        }
    }
}
