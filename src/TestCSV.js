import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';

class TestCSV extends Component {
    WriteToFile(passForm) {
        alert("CLICKED")
        console.log(passForm);
        // var fso = new ActiveXObject("Scripting.FileSystemObject");
        // var fileLoc = "D:\\sample.csv";
        // var file = fso.CreateTextFile(fileLoc, true);
        // file.writeline(passForm.FirstName.value + ',' +
        //                passForm.LastName.value);
        // file.Close();
        // alert('File created successfully at location: ' + fileLoc);
}
       
    handleFiles = files => {
        console.log("enter the handlefiles function");
        var reader = new FileReader();
        reader.onload = function (e) {        
        alert(reader.result)
        }
        console.log("files[0]*******************")
        console.log(files[0])
        reader.readAsText(files[0]);
    }

  render() {    
    return (      
        <div>                  
            <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                <button className='btn'>Upload</button>
            </ReactFileReader>
            <form>
            Type your first name: <input type="text" name="FirstName" size="20"/><br/>
            Type your last name: <input type="text" name="LastName" size="20"/><br/>
                <input type="button" value="submit" onclick={this.WriteToFile(this.form)}/>
          </form>
        </div>        
    );
  }
}

export default TestCSV;
