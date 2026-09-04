import { router } from "expo-router";

export const bannerSliderData = [
    {
        title:"Secure a store",
        desc:"Partner with us and become a store owner",
        onPress: ()=>router.navigate('/createStore'),
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        title:"Get customers",
        desc:"Get access to paying customers to grow your business",
        onPress: ()=>router.navigate('/create'),
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbGVzfGVufDB8fDB8fHww",
    },
    {
        title:"Find Products",
        desc:"Find quality products from trusted suppliers",
        onPress: ()=>router.navigate('/products'),
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
    },
]