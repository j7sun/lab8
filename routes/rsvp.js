var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

export.addRSVP = function(req,res){
	var rsvpEmail = request.body.rsvpEmail;

	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail);

	response.send(rsvpEmail);
};