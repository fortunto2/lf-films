import { Factory } from 'rosie'

// ------------------------------------- //
// Core
// ------------------------------------- //

Factory.define('user').attrs({
  _id: '0',
  username: 'user',
})

Factory.define('user1')
  .extend('user')
  .attrs({ _id: '1', username: 'user1' })

Factory.define('user2')
  .extend('user')
  .attrs({ _id: '2', username: 'user2' })

Factory.define('comment').attrs({
  _id: '0',
  postId: '1',
  userId: '0', // FIXME: chained from user()
  body: 'commentBody',
  htmlBody: 'commentHtmlBody',
  childrenResults: null,
  user: () => Factory.build('user'),
})

Factory.define('comment1')
  .extend('comment')
  .attrs({
    _id: '1',
    body: 'commentBody1',
    htmlBody: 'commentHtmlBody1',
    user: () => Factory.build('user1'),
  })

Factory.define('comment2')
  .extend('comment')
  .attrs({
    _id: '2',
    body: 'commentBody2',
    htmlBody: 'commentHtmlBody2',
    user: () => Factory.build('user2'),
  })

Factory.define('comment-with-children')
  .extend('comment')
  .attrs({
    childrenResults: () => [
      Factory.build('comment1'),
      Factory.build('comment2'),
    ],
  })

Factory.define('message').attrs({
  content: 'message content',
})

Factory.define('error-message')
  .extend('message')
  .attrs({ type: 'error' })

Factory.define('post').attrs({
  _id: '0',
  score: 10,
  baseScore: 0,
  title: 'postTitle',
  url: 'http://telescopeapp.org',
  thumbnailUrl: '/telescope.png',
  user: () => Factory.build('user'),
  upvoters: [],
  downvoters: [],
  categoriesArray: () => [Factory.build('category'), Factory.build('category1')],
  commentersArray: () => [Factory.build('user'), Factory.build('user1')],
  commentCount: 3,
  upvotes: 0,
  clickCount: 10,
  viewCount: 100,
  music: {
    musicArtist: 'Артист',
    musicTitle: 'Название песни',
  },
  filmUrl: 'ddddd',
})

Factory.define('post-no-score')
  .extend('post')
  .attrs({
    score: 0,
  })

Factory.define('route').attrs({
  route: { name: 'routeName' },
  queryParams: { cat: 'cat-slug' },
})

Factory.define('category')
  .attrs({
    _id: '0',
    name: 'categoryName',
    slug: 'category-slug',
  })

Factory.define('category1')
  .extend('category')
  .attrs({ _id: '1', name: 'categoryName1' })


// ------------------------------------- //
// Components
// ------------------------------------- //

Factory.define('comments-item-props').attrs({
  comment: () => Factory.build('comment'),
  currentUser: () => Factory.build('user2'),
})

Factory.define('comments-item-deleted-props')
  .extend('comments-item-props')
  .attrs({ comment: () => Factory.build('comment', { isDeleted: true }) })

Factory.define('comments-item-owner-props')
  .extend('comments-item-props')
  .attrs({ currentUser: () => Factory.build('user') })

Factory.define('comments-item-editing')
  .extend('comments-item-props')
  .attrs({ showEdit: true })

Factory.define('comments-item-replying')
  .extend('comments-item-props')
  .attrs({ showReply: true })

Factory.define('comments-edit-props').attrs({
  comment: () => Factory.build('comment'),
})

Factory.define('comments-list-default-props').attrs({
  results: () => [Factory.build('comment'), Factory.build('comment1')],
  currentUser: () => Factory.build('user2'),
  hasMore: false,
  ready: true,
  count: 2,
  totalCount: 2,
})

Factory.define('comments-list-has-more-props')
  .extend('comments-list-default-props')
  .attrs({ hasMore: true, totalCount: 4 })

Factory.define('comments-list-loading-more-props')
  .extend('comments-list-has-more-props')
  .attrs({ ready: false })

Factory.define('comments-list-empty-props')
  .extend('comments-list-default-props')
  .attrs({ results: [], count: 0, totalCount: 0 })

Factory.define('comments-list-loading-props')
  .extend('comments-list-empty-props')
  .attrs({ ready: false })

Factory.define('comments-node-props')
  .extend('comments-item-props')

Factory.define('comments-node-nested-props')
  .extend('comments-node-props')
  .attrs({ comment: Factory.build('comment-with-children') })

Factory.define('category-props')
  .attrs({
    key: 0,
    category: () => Factory.build('category'),
    currentCategorySlug: 'category-slug', // FIXME: ??
  })

Factory.define('categories-list-props')
  .attrs({
    categories: () => [Factory.build('category'), Factory.build('category1')],
  })

export default Factory
