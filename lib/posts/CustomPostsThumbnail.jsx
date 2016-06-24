import React from 'react';

const CustomPostsThumbnail = ({post}) => {
  
	if (post.thumbnailUrl) {
	  return (
	    <a href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
	      <img className="img-fluid" src={Posts.getThumbnailUrl(post)} />
	    </a>		
	  )
	} else {
	  return (
	    <a href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
	      <img className="img-fluid" src="//dcr2ej3odfzos.cloudfront.net/227874/baaae60a.mp4.jpg" />
	    </a>		
	  )		
	}


}

CustomPostsThumbnail.displayName = "CustomPostsThumbnail";

module.exports = CustomPostsThumbnail;
export default CustomPostsThumbnail;