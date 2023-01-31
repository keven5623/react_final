const menuList = [
    {
        title : '首頁',
        key :'/admin/home',
        icon: 'home'
    },
    {
        title : '文章',
        key :'sub2',
        icon: 'book',
        children:[
            {
                title : '文章總覽',
                key :'/admin/article',
                icon: 'highlight'
            },
            {
                title : '我的文章',
                key :'/admin/myarticle',
                icon: 'smile'
            }
        ]
    },
    {
        title : '課程',
        key :'sub1',
        icon: 'play-square',
        children:[
            {
                title : '課程總覽',
                key :'/admin/lesson',
                icon: 'account-book'
            },
            {
                title : '我的課程',
                key :'/admin/mylesson',
                icon: 'smile'
            },
            {
                title : '問與答',
                key :'/admin/question',
                icon: 'question'
            }
            
        ]
    },
    {
        title : '管理員',
        key :'sub3',
        icon: 'android',
        children:[
            
            // {
            //     title : '授權',
            //     key :'/admin/role',
            //     icon: 'smile'
            // },
            {
                title : '用戶列表',
                key :'/admin/member',
                icon: 'smile'
            }
        ]
    }
]

export default menuList