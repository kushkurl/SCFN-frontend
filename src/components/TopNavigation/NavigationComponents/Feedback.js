import React from 'react';

const feedback = () => {
return (
	<div>
		<div className="container">
			<div className="card mt-4">
				<div className="card-body">
				<div
				style={{
          textAlign: "center",
          maxWidth: "1400px",
          marginLeft: "15px",
		  marginRight: "15px",
          border: "3px solid #e6e6e6",
          padding: "40px 25px",
          marginTop: "25px"
        }}>
	<section class="section">
	<div class="box-main">
                    <div class="firstHalf">
	
	<h1 class="test-big"
	style={{marginBottom: '15px', marginTop: '1px', color: "#b64f60f5", fontSize: "60px", paddingLeft: "30px"}}>Leave a feedback!</h1>
	</div>
	</div>
	</section>

	<section class="section">
        <div class="box-main">
            <div class="secondHalf">

			<p className="TextArea-Header"  style={{
							lineHeight: 1.5,
							fontWeight: 300,
							marginBottom: "25px",
							fontSize: "1.0rem"
						  }}>
            Please leave a comment about your experience below:
            </p>

			<textarea className='Feedback-Box' style={{
							 padding: "60px 80px",
							 height: "200px",

						  }}
            placeholder="Type your comment here..."
            />

				</div>
				</div>
				</section>

				<button className="feedbackbtn" style={{
					marginTop: "25px",
							 padding: "10px 10px",
							 backgroundColor: "#F08080",
							 borderRadius: "8px",
							 textAlign: "center",
							 fontSize: "15px", paddingLeft: "3px"
						  }}
						  placeholder="submit">
	Send Feedback
	</button>

	</div>
	</div>
	</div>
	</div>
	
	</div>

);
};

export default feedback;
