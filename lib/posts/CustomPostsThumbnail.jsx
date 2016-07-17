import React from 'react';
import { Link } from 'react-router';

// //for storybook
// if (!Posts) {
// 	var Posts = {
// 	    getLink: () => ''
// 	};
//
// }

const CustomPostsThumbnail = ({post}) => {

	let tUrl='http://dcr2ej3odfzos.cloudfront.net/'+post.thumbnailUrl;

	if (post.thumbnailUrl) {
	  return (
	    <Link to={Posts.getLink(post)}>
	      <img className="img-fluid" src={tUrl} />
	    </Link>
	  )
	} else {
	  return (
	    <Link to={Posts.getLink(post)}>
	      <img className="img-fluid" src="//dcr2ej3odfzos.cloudfront.net/227874/baaae60a.mp4.jpg" />
	    </Link>
	  )
	}


}

CustomPostsThumbnail.displayName = "CustomPostsThumbnail";

module.exports = CustomPostsThumbnail;
export default CustomPostsThumbnail;
