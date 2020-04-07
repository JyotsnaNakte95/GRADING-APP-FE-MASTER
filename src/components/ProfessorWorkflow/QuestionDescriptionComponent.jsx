import React from 'react';
import { Form } from 'react-bootstrap';
import './QuestionDescriptionComponent.scss';

class QuestionDecriptionComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            problemName: '',
            problemDescription: '',
            //algoTypes:'',
            //solutionTypes: [],
            testCaseFile: [],
            expectedOutputFile: []
        }

        this.problemNameUpdate = this.problemNameUpdate.bind(this);
        this.problemDescription = this.problemDescription.bind(this);
        this.testCase = this.testCase.bind(this);
        this.expectedOutput = this.expectedOutput.bind(this);
       // this.algoTypes=this.algoTypes.bind(this);
        //this.solutionTypes=this.solutionTypes.bind(this);
    }
    /*
    solutionTypesUpdate(index,type,value){
        //this.state.solutionTypes[index].type=value;
        this.setState(solutionTypes [index].type= value );
    }
    */
    problemNameUpdate(e) {
        this.setState({ problemName: e.target.value });
    }

    problemDescription(e) {
        this.setState({ problemDescription: e.target.value });    
    }

    testCase(e) {
        //console.log(e.target.files);
        this.setState({ testCaseFile: Array.from(e.target.value) });
        //console.log(testCaseFile);    
    }

    expectedOutput(e) {
        //console.log(e.target.files);
        this.setState({ expectedOutputFile: Array.from(e.target.value) });
    }
    /*
    algoTypes(e){
        this.setState({ algoTypes: e.target.value });  
        
    }
    */
    render() {
        /*
        const items=[]
        for (var i=0;i<this.state.algoTypes;i++) {
            items.push(i);
          }
        console.log(items);
        */
        return (
            <div className="question-description-container" id={this.state.id}>
                <Form.Group controlId="formProblemName">
                    <Form.Label>Problem Name</Form.Label>
                    <Form.Control required type="text" name="problemName" onChange={this.problemNameUpdate} placeholder="Enter problem name" />
                </Form.Group>
                <Form.Group controlId="formProblemDescription">
                    <Form.Label>Problem Decription</Form.Label>
                    <Form.Control required as="textarea" name="problemDescription" onChange={this.problemDescription} placeholder="Enter problem description" />
                </Form.Group>
                <Form.Group controlId="formTestCase">
                    <Form.Label>Test Case File</Form.Label>
                    <Form.Control required type="file" name="textCases" onChange={this.testCase} placeholder="Upload the test case file" multiple/>
                </Form.Group>
                <Form.Group controlId="formExpectedOutput">
                    <Form.Label>Expected Output File</Form.Label>
                    <Form.Control required type="file" name="outputFile" onChange={this.expectedOutput} placeholder="Upload the expected output file" multiple/>
                </Form.Group>
                {
                /*
                <Form.Group controlId="algoTypes">
                    <Form.Label>Number Of Solution</Form.Label>
                    <Form.Control required type="numeric" name="algoTypes" onChange={this.algoTypes} placeholder="Enter the types of solution" />
                </Form.Group>

                {(this.state.algoTypes > 0) && (
                
                <div>
                 { items.map((index) => (  
                <Form.Group controlId="">
                    <Form.Label>Type Of Solution</Form.Label>
                    <Form.Control required type="textarea" name="" onChange= {value =>solutionTypesUpdate(index,"typesolu", value )}  placeholder="Enter the types of solution" />
                    <Form.Label> Duration</Form.Label>
                    <Form.Control required type="textarea" name="" placeholder="Enter the types of solution" />
                </Form.Group>
                )) }
                    </div>
                    
                    
                    )}
                */
                 }
            </div>

        );
    }
}

  export default QuestionDecriptionComponent;