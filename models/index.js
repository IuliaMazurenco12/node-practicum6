
import User from "./user.js";
import Post from "./post.js";
import Category from "./Category.js";
import Product from "./Product.js";


//one to one 
// User.hasOne(Post, { foreignKey: "userId" ,as: "post" });

// Post.belongsTo(User, { foreignKey: "userId", as: "user" });


//one to many
// User.hasMany(Post, { foreignKey: "userId", as: "posts" });
// Post.belongsTo(User, { foreignKey: "userId", as: "user" });

//many to many connection
// User.belongsToMany(Post, { through: "UserPosts", foreignKey: "userId", as: "posts" });
// Post.belongsToMany(User, { through: "UserPosts", foreignKey: "postId", as: "users" });

// one to many: Category ---> Product
Category.hasMany(Product, {
  foreignKey: "categoryName", 
  sourceKey: "name",          
  as: "products",
});
Product.belongsTo(Category, {
  foreignKey: "categoryName",
  targetKey: "name",
  as: "category",
});


export { User, Post, Category, Product };


