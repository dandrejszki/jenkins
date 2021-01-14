// pipeline {
//     agent any
//     stages {
//      stage('test') {
//          steps { 
//         sh(script: """
//             echo "hello"
//            git clone git@github.com:dandrejszki/jenkins.git
//            cd ./jenkins
           
//            docker build . -t test
//         """)
//     }
//     }
//     }
// }



pipeline {
    agent any
    stages {
        
     stage("test") {
         steps { 
		  echo 'testing'
            }
                }
      stage("build") {
         steps { 
		  echo 'building'
            }
                }          
    }
}