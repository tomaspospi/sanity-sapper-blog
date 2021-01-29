export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6013d2d1b86a75b73842ef63',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-kcb6uvpb',
                  apiId: '92e86037-71bb-4bef-b5f0-ed087b246cfc'
                },
                {
                  buildHookId: '6013d2d15b26a6c07589565d',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-n92xf3gr',
                  apiId: '181582d8-f727-4b59-a642-4d3d1c58ed17'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomaspospi/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-n92xf3gr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
