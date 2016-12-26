import Posts from "meteor/nova:posts";
import Users from 'meteor/nova:users';

/*
Let's assign a color to each post (why? cause we want to, that's why).
We'll do that by adding a custom field to the Posts collection.
Note that this requires our custom package to depend on nova:posts and nova:users.
*/

Posts.addField(
  {
    fieldName: 'color',
    fieldSchema: {
      type: String,
      control: "select", // use a select form control
      optional: true, // this field is not required
      // insertableIf: Users.is.admin, // insertable by regular logged in users and admins
      // editableIf: Users.is.admin, // editable by the post's owner or admins
      autoform: {
        options: function () { // options for the select form control
          return [
            {value: "white", label: "White"},
            {value: "yellow", label: "Yellow"},
            {value: "blue", label: "Blue"},
            {value: "red", label: "Red"},
            {value: "green", label: "Green"}
          ];
        }
      },
      publish: true // make that field public and send it to the client
    }
  }
);


Posts.addField(
  {
    fieldName: 'filmUrl',
    fieldSchema: {
      type: String,
      optional: false, // this field is not required
      // insertableIf: Users.is.admin, // insertable by regular logged in users and admins
      // editableIf: Users.is.admin, // editable by the post's owner or admins
      control: "text",
      publish: true // make that field public and send it to the client
    }
  }
);

Posts.addField(
  {
    fieldName: 'duration',
    fieldSchema: {
      type: Number,
      optional: true, // this field is not required
      // insertableIf: Users.is.admin, // insertable by regular logged in users and admins
      // editableIf: Users.is.admin, // editable by the post's owner or admins
      publish: true // make that field public and send it to the client
    }
  }
);


Posts.addField(
  {
    fieldName: 'isPublic',
    fieldSchema: {
      type: Boolean,
      optional: true,
      defaultValue: false,
      // insertableIf: Users.is.memberOrAdmin,
      // editableIf: Users.is.ownerOrAdmin,
      control: "checkbox",
      publish: true,
      // group: adminGroup
    }
  }
);


Posts.addField(
  {
    fieldName: 'proHD',
    fieldSchema: {
      type: Boolean,
      optional: true,
      defaultValue: 0,
      // insertableIf: Users.is.admin,
      // editableIf: Users.is.admin,
      publish: true,
      control: "checkbox"
      // group: adminGroup
    }
  }
);



Posts.addField(
  {
    fieldName: 'music',
    fieldSchema: {
      type: Object,
      optional: true,
      blackbox: true,
      publish: true
    }
  }
);


/*
The main post list view uses a special object to determine which fields to publish,
so we also add our new field to that object:
*/

import PublicationUtils from 'meteor/utilities:smart-publications';

PublicationUtils.addToFields(Posts.publishedFields.list, ["color"]);
PublicationUtils.addToFields(Posts.publishedFields.list, ["filmUrl"]);
PublicationUtils.addToFields(Posts.publishedFields.list, ["duration"]);
PublicationUtils.addToFields(Posts.publishedFields.list, ["proHD"]);
PublicationUtils.addToFields(Posts.publishedFields.list, ["isPublic"]);
PublicationUtils.addToFields(Posts.publishedFields.list, ["music"]);
