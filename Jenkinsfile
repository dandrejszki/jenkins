pipeline {
    agent any
    stages {
        stage ('Test') {
            steps {
                echo "Test"
            }
            post {
                always {
                    echo "Post-Always result"
                }
            }
        }
        stage ('Build') {
            steps {
                echo "Build"
            }
            post {
                always {
                    echo "Post-Build"
                }
            }
        }
    }
    post {
        always {
            echo "Pipeline result"
        }
    }
}
