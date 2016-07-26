import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

console.log('create DropzoneCom');

// import {uploadForm} from './uploadForm.jsx';

class Uploader extends Component {

  constructor(props) {
      super(props);
      this.onDrop   = this.onDrop.bind(this);
    }

  onDrop(files) {
      console.log('Received files: ', files);

      this.setState({
        files: files
      });

      var file = files[0];
      if (file) {
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);

        // uploadInstance.on('start', function() {
        //   template.currentUpload.set(this);
        // });
        //
        // uploadInstance.on('end', function(error, fileObj) {
        //   if (error) {
        //     alert('Error during upload: ' + error.reason);
        //   } else {
        //     alert('File "' + fileObj.name + '" successfully uploaded');
        //   }
        //   template.currentUpload.set(false);
        // });

        uploadInstance.start();
      }

  }

  // uploadedFiles() {
  //   return uploadedFiles.find();
  // }



  render() {

    this.currentUpload = new ReactiveVar(false);

    return (
      <div className="Uploader">

        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>


      </div>
    );
  }

}

export default Uploader;





// <template name="uploadForm">
//   {{#with currentUpload}}
//     Uploading <b>{{file.name}}</b>:
//     <span id="progress">{{progress.get}}%</span>
//   {{else}}
//     <input id="fileInput" type="file" />
//     <p><small>Upload file in <code>jpeg</code> or <code>png</code> format, with size less or equal to 10MB</small></p>
//   {{/with}}
// </template>
