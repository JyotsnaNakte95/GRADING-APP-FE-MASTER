import React from 'react';
import Header from '../HeaderComponent/HeaderComponent';
import SubHeader from '../SubHeaderComponent/SubHeaderComponent';
import './StudentSubmissionComponent.scss';
import config from '../../config/config';

const url = `${config.constants.URL}`;

class StudentSubmissionComponent extends React.Component {
    constructor(props) {
        super(props);
        let hw = props.history.location.state.homework;
        let user = props.history.location.state.username;
        let problem = props.history.location.state.problem;
        let submissionDetails = props.history.location.state.submissionDetails;
        console.log(typeof(submissionDetails));
        console.log(submissionDetails.length);
        this.state = {
            homework: hw,
            username: user,
            problem: problem,
            submissionDetails: submissionDetails,
        }

        this.handleAnotherProblem = this.handleAnotherProblem.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleWriteUp = this.handleWriteUp.bind(this);

    }
   
    handleAnotherProblem() {
        this.props.history.push({
            pathname: '/uploadCode',
            state: { 
                homework: this.state.homework, 
                username: this.state.username,
            }
        })
    }

    handleWriteUp(e) {

        let formData = new FormData();
        formData.append("writeupFile", e.target.files[0]);
        formData.append("userName", this.state.username);
        formData.append("homeworkName", this.state.homework);

        fetch(`${url}uploadWriteup`, {
          method: 'POST',
          body: formData,
          mode: "no-cors"
        })
        .then(res => console.log(res));
        
        alert("The write-up was uploaded successfully!");
    }

    handleLogout() {
        this.props.history.push("/");
    }

    render() {



        // let submissionDetail = this.state.submissionDetails;
        let submissionList = this.state.submissionDetails.length > 0
		&& this.state.submissionDetails.map((submi) => {
		return (
            //<option key={i} value={item}>{item}</option>
                  <div>              
                <div key={submi.status}> Your Output : </div>
                <div  className="display-box"> { submi.studentOutput } </div> <br/> 
                <div> Expected Output :</div>
                <div className="display-box">  { submi.expectedOutput } </div> <br/>
                <div> 
                    Test Case : <span className={"test-case-"+this.state.submissionDetails.testCasePassed}> 
                        {submi.testCasePassed === true ? "PASSED" : "FAILED"} 
                    </span> <br/>
                </div> 
                </div>
        )}, this);
//var submissionDetaill= this.state.submissionDetails;
/*
        var yourOutput = (this.state.status === 0) ? 
        
        this.state.studentOutput.split('\n').map((item,i) => {
            return <pre key={i}>{ item }</pre>
        }) 
        :     
        this.state.errorOutput.split('\n').map((item,i) => {
            if(item.includes('Main.java')) {
                item = item.substring(item.indexOf('Main.java'));
            }
            return <pre key={i}>{ item }</pre>
        })
        

        var expectedOutput = this.state.expectedOutput.split('\n').map((item,i) => {
            return <pre key={i}>{ item }</pre>
        })
*/
        return (
          <div className='student-code-container'>
              <Header />
              <SubHeader user="Student" removeBack/>
              <h2 className="student-heading">Submission Details</h2>

              <div className="student-submission-form">
                <div className="success-message">
                    The code for <span className="problem-name">{this.state.problem}, {this.state.homework}</span> was submitted successfully!
                </div>  <br/>
                {submissionList}

                <div className="button-wrapper" >
                    <input className="submit-button" type="button" value="Upload Write-up" />
                    <input className="submit-button" type="button" onClick={this.handleAnotherProblem} value="Submit another problem" />
                    <input className="submit-button" type="button" onClick={this.handleLogout} value="Logout" />
                </div>
                <input onChange={this.handleWriteUp} className="dummy-button" id="myInput" type="file" />
              </div>
          </div>
        );
    }
}

export default StudentSubmissionComponent;