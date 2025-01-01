pipeline {
    agent any

    tools {
        // Use the configured Node.js version, replace "nodejs_16" with the name you gave in Jenkins tool configuration
        nodejs 'nodejs_16'
    }

    stages {
        stage('Setup') {
            steps {
                script {
                    // Verify Node and NPM versions
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm ci
                    sh 'npm ci'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }
        
        stage('Docker') {
            steps {
                script {
                    // Define the Docker image name and tag
                    def imageName = "dev123"
                    def imageTag = "latest"

                    // Build the Docker image
                    sh "docker build -t suarim/${imageName}:${imageTag} ."
                    sh "echo docker build success"

                    // Log in to Docker Hub or another registry
                    sh "echo qwerty123@@ | docker login -u suarim --password-stdin"

                    // Push the Docker image to the repository
                    sh "docker push suarim/${imageName}:${imageTag}"
                }
            }
        }

        stage('Container') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 suarim/your-image-name:latest'
                }
            }
        }
    }
}