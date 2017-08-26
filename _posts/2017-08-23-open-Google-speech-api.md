# Google/MS/AWS 语音识别API开通

> 简单记录一下过程，以备参考

## Google

1. 设置项目

   - 新建项目

   - 开通付款

   - 开通API

   - 设置credentials

     ​

2. 安装gcloud-install the Google Cloud SDK

   - ```shell
     # Update YUM with Cloud SDK repo information:
     sudo tee -a /etc/yum.repos.d/google-cloud-sdk.repo << EOM
     [google-cloud-sdk]
     name=Google Cloud SDK
     baseurl=https://packages.cloud.google.com/yum/repos/cloud-sdk-el7-x86_64
     enabled=1
     gpgcheck=1
     repo_gpgcheck=1
     gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg
            https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
     EOM

     # The indentation for the 2nd line of gpgkey is important.

     # Install the Cloud SDK
     yum install google-cloud-sdk

     ```

     ​

3. 生成credentials文件

   - Cloud Platform Console, navigate to the [Create service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey?_ga=2.11417841.-453059119.1503314082) page
   - `export GOOGLE_APPLICATION_CREDENTIALS=<path_to_service_account_file>`
     ​

4. 发送请求

   - 创建json

   - `gcloud auth activate-service-account --key-file=service-account-key-file`

   - `gcloud auth application-default print-access-token`

   - `curl -s -H "Content-Type: application/json" \    -H "Authorization: Bearer access_token" \    https://speech.googleapis.com/v1/speech:recognize \    -d @sync-request.json`

     ​

5. perform speech recognition on local files

   ```python
   def transcribe_file(speech_file):
       """Transcribe the given audio file."""
       from google.cloud import speech
       from google.cloud.speech import enums
       from google.cloud.speech import types
       client = speech.SpeechClient()

       with io.open(speech_file, 'rb') as audio_file:
           content = audio_file.read()

       audio = types.RecognitionAudio(content=content)
       config = types.RecognitionConfig(
           encoding=enums.RecognitionConfig.AudioEncoding.LINEAR16,
           sample_rate_hertz=16000,
           language_code='en-US')

       response = client.recognize(config, audio)
       alternatives = response.results[0].alternatives

       for alternative in alternatives:
           print('Transcript: {}'.format(alternative.transcript))
   ```

   ​

   ​