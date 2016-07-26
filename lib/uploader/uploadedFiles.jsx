// <template name="uploadedFiles">
//   {{#if uploadedFiles.count}}
//     <ul>
//       {{#each file in uploadedFiles.each}}
//         <li>
//           <a href="{{file.link}}?download=true" download="{{file.name}}">{{file.name}}</a>
//         </li>
//       {{/each}}
//     </ul>
//   {{else}}
//     <div>No files uploaded, yet</div>
//   {{/if}}
// </template>
