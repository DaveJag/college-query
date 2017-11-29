// Queries School API
// Contains user's search form.
// Include React
var React = require("react");
// Create Search Component
var Query = React.createClass({
  // Set generic state
  getInitialState: function() {
    return {
      // degrees: "",
      program: "",
      region_id: ""
      // name: ""
    };
},
  // When user submits
  _handleSubmit: function(event) {
    // prevent HTML from trying to submit form if user hits enter key instead of
// clicking search button
    event.preventDefault();
    // Set parent to have search terms
    // this.props._setSearchFeilds(this.state.degrees, this.state.program, this.state.name);
    this.props._setSearchFeilds(this.state.program);
    
  },
  // _handleDegreesChange: function(e) {
  //   this.setState({degrees: e.target.value});
  // },
  _handleProgramChange: function(e) {
      this.setState({program: e.target.value});
   },
  // _handleNameChange: function(e) {
  //      this.setState({name: e.target.value});
  //  },
  // Render the Query data form, first Div at the top of the screen to enter search criteria
  render: function() {
    return (
      <div className="panel panel-default">
{/*Creates a header called Search*/}
        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Search</b></i></h3>
        </div>
        <div className="panel-body text-center">
          <form role="form" onSubmit={this._handleSubmit}>
{/*Creates a label for API  data category "degrees", displays as Degree Type.  Intially, enter 2 or 4.  Later, add a 
//drop down menu here*/}
             {/*<div className="form-group col-md-offset-3 col-md-6">
               //<label htmlFor="degrees" className="text-center">Degree Type</label>
               <label for="degree-type">Choose a degree
                  <select id="degree-type" name="degree">
                   <option value="2">Two-year (Associate's)</option>
                   <option value="3">Four-year (Bachelor's)</option>
                   </select>
                </label>
               <input type="integer" className="form-control text-center" id="topic" onChange={this._handleDegreesChange} />
             </div>*/}
           <br />
{/*Creates a label for the API category "program"; displays as Major, selected from the drop down menu.  This can also be a drop down menu.*/}
          <div className="form-group col-md-offset-3 col-md-6">
          this.state = {value: "agriculture"};
          <label htmlFor="program">Choose a major:</label>
          <select value={this.state.value} id="program" name="program">
            <option value="" selected>Any</option>
            
            <option value="agriculture">Agriculture, Agriculture Operations, and Related Sciences</option>
            
            <option value="architecture">Architecture and Related Services</option>
            
            <option value="ethnic_cultural_gender">Area, Ethnic, Cultural, Gender, and Group Studies</option>
            
            <option value="biological">Biological and Biomedical Sciences</option>
            
            <option value="business_marketing">Business, Management, Marketing, and Related Support Services</option>
            
            <option value="communication">Communication, Journalism, and Related Programs</option>
            
            <option value="communications_technology">Communications Technologies/Technicians and Support Services</option>
            
            <option value="computer">Computer and Information Sciences and Support Services</option>
            
            <option value="construction">Construction Trades</option>
            
            <option value="education">Education</option>
            
            <option value="engineering">Engineering</option>
            
            <option value="engineering_technology">Engineering Technologies and Engineering-Related Fields</option>
            
            <option value="english">English Language and Literature/Letters</option>
            
            <option value="family_consumer_science">Family and Consumer Sciences/Human Sciences</option>
            
            <option value="language">Foreign Languages, Literatures, and Linguistics</option>
            
            <option value="health">Health Professions and Related Programs</option>
            
            <option value="history">History</option>
            
            <option value="security_law_enforcement">Homeland Security, Law Enforcement, Firefighting and Related Protective Services</option>
            
            <option value="legal">Legal Professions and Studies</option>
            
            <option value="humanities">Liberal Arts and Sciences, General Studies and Humanities</option>
            
            <option value="library">Library Science</option>
            
            <option value="mathematics">Mathematics and Statistics</option>
            
            <option value="mechanic_repair_technology">Mechanic and Repair Technologies/Technicians</option>
            
            <option value="military">Military Technologies and Applied Sciences</option>
            
            <option value="multidiscipline">Multi/Interdisciplinary Studies</option>
            
            <option value="resources">Natural Resources and Conservation</option>
            
            <option value="parks_recreation_fitness">Parks, Recreation, Leisure, and Fitness Studies</option>
            
            <option value="personal_culinary">Personal and Culinary Services</option>
            
            <option value="philosophy_religious">Philosophy and Religious Studies</option>
            
            <option value="physical_science">Physical Sciences</option>
            
            <option value="precision_production">Precision Production</option>
            
            <option value="psychology">Psychology</option>
            
            <option value="public_administration_social_service">Public Administration and Social Service Professions</option>
            
            <option value="science_technology">Science Technologies/Technicians</option>
            
            <option value="social_science">Social Sciences</option>
            
            <option value="theology_religious_vocation">Theology and Religious Vocations</option>
            
            <option value="transportation">Transportation and Materials Moving</option>
            
            <option value="visual_performing">Visual and Performing Arts</option>
            
          </select>
        
             <input type="text" className="form-control text-center" id="program" onChange={this._handleProgramChange} />
            </div>
          <br />

       {/* Region drop-down field */}
        <div className="form-group col-md-offset-3 col-md-6">
        this.state = {value: "1"};
              {/*} <label htmlFor="regions" className="text-center">Region (USA)</label>  */}
               <label htmlFor="region-type">Select a region:</label>
                  <select value={this.state.value} id="region-type" name="region-type">
                      <option value="0">U.S. Service School</option>
                      <option value="1">New England (CT, ME, MA, NH, RI, VT)</option>
                      <option value="2">Mid East (DE, DC, MD, NJ, NY, PA)</option>
                      <option value="3">Great Lakes (IL, IN, MI, OH, WI)</option>
                      <option value="4">Plains (IA, KS, MN, MO, NE, ND, SD)</option>
                      <option value="5">Southeast (AL, AR, FL, GA, KY, LA, MS, NC, SC, TN, VA, WV)</option>
                      <option value="6">Southwest (AZ, NM, OK, TX)</option>
                      <option value="7">Rocky Mountains (CO, ID, MT, UT, WY)</option>
                      <option value="8">Far West (AK, CA, HI, NV, OR, WA)</option>
                      <option value="9">Outlying Areas (AS, FM, GU, MH, MP, PR, PW, VI)</option>
                  </select>
                
                  <input type="integer" className="form-control text-center" id="region-type" onChange={this._handleRegionChange} />
        </div> 
 



{/*Creates a label for API categroy "name", display as School Name, a text field where the user enters school name.*/}
       {/*<div className="form-group col-md-offset-3 col-md-6">
           <label htmlFor="name">School Name</label>
           <input type="text" className="form-control text-center" id="name" onChange={this._handleNameChange} />
          </div>*/}
         <br />
{/*Creates Search button*/}
            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Search</button>
          </form>
        </div>
      </div>
    );
  }
});
// Export component back for use in Main file
module.exports = Query;
