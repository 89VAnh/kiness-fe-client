pipeline {
  agent { label 'built-in' }

  tools {
    nodejs 'node_v18'
  }

  stages {
    stage('SCM') {
      steps {
        checkout scm
      }
    }

    stage('build') {
      steps {
        sh 'npm install -g pnpm'
        sh 'pnpm install'
        sh 'pnpm run build'
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }

    stage('deploy') {
      agent { label 'ds2' }
      steps {
        copyArtifacts filter: 'dist/**', fingerprintArtifacts: true, projectName: env.JOB_NAME, selector: specific ('${BUILD_NUMBER}')
        sh 'rm -rf /var/www/kiness-fe-client'
        sh 'mkdir -p /var/www/kiness-fe-client'
        sh 'scp -r dist/. /var/www/kiness-fe-client'
      }
    }
  }
}
