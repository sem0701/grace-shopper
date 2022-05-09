"use strict";

const { isAdmin } = require("../server/api/securityCheck");
const {
  db,
  models: { User, Product },
} = require("../server/db");
const Order = require("../server/db/models/Order");
const OrderProduct = require("../server/db/models/OrderProduct");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123", isAdmin: false }),
    User.create({ username: "murphy", password: "345", isAdmin: false }),
    User.create({ username: "sulaiman", password: "321", isAdmin: true }),
  ]);
  // Creating Product
  const products = await Promise.all([
    Product.create({
      name: "Margherita Pizza",
      imageURL:
        "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Classic bubbly thin crust topped with crushed San Marzano tomato sauce, fresh mozzarella, and basil with a drizzle of olive oil and a sprinkle of salt",
      price: 18,
      calories: 1200,
    }),
    Product.create({
      name: "Spaghetti Bolognese",
      imageURL:
        "https://images.pexels.com/photos/6287523/pexels-photo-6287523.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Spaghetti tossed in a hearty sauce made from tomatoes, minced beef, garlic, wine, herbs, and spices",
      price: 21,
      calories: 1200,
    }),
    Product.create({
      name: "Chicken Penne Alla Vodka",
      imageURL:
        "https://irepo.primecp.com/2018/05/371955/Chicken-Penne-Pasta-With-Vodka-Sauce_ExtraLarge1000_ID-2732698.jpg?v=2732698",
      description:
        "Rich and creamy tomato sauce folded together with penne pasta and sauteed chicken breasts",
      price: 23,
      calories: 1120,
    }),
    Product.create({
      name: "Pesto Gnocchi",
      imageURL:
        "https://images.pexels.com/photos/4748542/pexels-photo-4748542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Pillowy and tender homemade potato dumplings smothered in a creamy sauce and sun-dried tomatoes.",
      price: 21,
      calories: 1200,
    }),
    Product.create({
      name: "Bruschetta",
      imageURL:
        "https://media.istockphoto.com/photos/bruschetta-with-tomato-and-basil-picture-id469381932",
      description:
        "Grilled sourdough bread rubbed with garlic salt and olive oil and topped with chopped Caprese tomatoes and fresh basil",
      price: 10,
      calories: 300,
    }),
    Product.create({
      name: "Beef Carpaccio",
      imageURL:
        "https://images.pexels.com/photos/6488856/pexels-photo-6488856.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Thinly sliced filet mignon, capers, onions, garlic, shaved Parmigiano Reggiano and whole grain mustard sauce served with toasted garlic bread",
      price: 16,
      calories: 560,
    }),
    Product.create({
      name: "Fried Calamari",
      imageURL:
        "https://images.pexels.com/photos/6036950/pexels-photo-6036950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Lightly battered rings of squid quickly deep fried coated with a splash of fresh lemon juice",
      price: 16,
      calories: 890,
    }),
    Product.create({
      name: "Eggplant Parmesan",
      imageURL:
        "https://eatthegains.com/wp-content/uploads/2019/03/Instant-Pot-Eggplant-Parmesan-12.jpg",
      description:
        "Slices of tender eggplant coated in homemade breadcrumbs layered with melted cheeses and rich marinara and topped with fresh grated parmesan cheese",
      price: 24,
      calories: 892,
    }),
    Product.create({
      name: "Wild Mushroom Risotto",
      imageURL:
        "https://assets.epicurious.com/photos/54b315763edeef84363ba718/master/pass/361309_wild-mushroom-risotto_1x1.jpg",
      description:
        "Arborio rice simmered with a combination of fresh and dried wild mushrooms and topped white truffle oil and fresh grated parmesan cheese",
      price: 24,
      calories: 892,
    }),
    Product.create({
      name: "Veal Piccata",
      imageURL:
        "https://media.istockphoto.com/photos/veal-piccata-picture-id163163104",
      description:
        "Thin tender veal scaloppini smothered in a simple white wine and lemon juice sauce served with linguine",
      price: 24,
      calories: 892,
    }),

    Product.create({
      name: "Kimchi Fried Rice",
      imageURL:
        "https://s23209.pcdn.co/wp-content/uploads/2019/02/Kimchi-Fried-RiceIMG_8738.jpg",
      description:
        "Korean white rice stir fried with kimchi, green onions, and spam topped with a fried egg and seaweed flakes",
      price: 19,
      calories: 930,
    }),
    Product.create({
      name: "Bibimbap",
      imageURL:
        "https://media.istockphoto.com/photos/bibimbap-picture-id492494788",
      description:
        "Korean rice dish with namul (cooked vegetables) and bulgogi, topped with a fried egg",
      price: 26,
      calories: 1220,
    }),
    Product.create({
      name: "Tteokbokki",
      imageURL:
        "https://media.istockphoto.com/photos/tteokbokki-with-eggs-in-gray-bowl-on-concrete-table-top-tteokbokki-is-picture-id1253629795",
      description:
        "Chewy tteok (rice cake) and odeng (fish cakes) cooked in a sweet and spicy gochujang based sauce.",
      price: 17,
      calories: 965,
    }),
    Product.create({
      name: "Bulgogi",
      imageURL:
        "https://media.istockphoto.com/photos/homemade-barbecue-korean-beef-bulgogi-picture-id926774114",
      description:
        "Thinly sliced beef marinated in a mix of soy sauce, sugar, sesame oil, garlic, onion, and often pureed Asian pear",
      price: 33,
      calories: 1235,
    }),
    Product.create({
      name: "Kimchi Jjigae",
      imageURL:
        "https://www.maangchi.com/wp-content/uploads/2007/11/kimchijjigae.jpg",
      description: "Hot, spicy stew made of kimchi, pork, vegetables, and tofu",
      price: 31,
      calories: 835,
    }),
    Product.create({
      name: "Jajangmyeon",
      imageURL:
        "https://a.cdn-hotels.com/gdcs/production143/d643/67be50c8-3460-4544-b47a-e60f1d071340.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      description:
        "Chewy wheat noodles topped with a thick sauce made of chunjang, diced pork, and vegetables",
      price: 29,
      calories: 735,
    }),
    Product.create({
      name: "Samgyeopsal Ssam Combo",
      imageURL:
        "https://assets-metrostyle.abs-cbn.com/prod/metrostyle/attachments/fa017f0c-cdb2-4e90-85ac-95e37da63932_samgyupsabahay.jpg",
      description:
        "Grilled pork belly served with various banchan, ssam-jang, and fresh lettuce and perilla leaves",
      price: 35,
      calories: 1450,
    }),
    Product.create({
      name: "Korean fried chicken",
      imageURL:
        "https://a.cdn-hotels.com/gdcs/production148/d1217/691c7201-0ede-467c-acaf-8bb2903356f1.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      description:
        "Double deep fried chicken that is coated with sweet and spicy sauce",
      price: 28,
      calories: 990,
    }),
    Product.create({
      name: "Bibim Naengmyun",
      imageURL:
        "https://a.cdn-hotels.com/gdcs/production17/d515/6683396a-7dff-41d0-acd0-e13c00c5c67c.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      description:
        "Cold and chewy buckwheat vermicelli noodles mixed in a sweet and spicy sauce, and topped with julienned cucumbers, Korean pear slices, boiled egg, and slices of cold boiled beef.",
      price: 29,
      calories: 820,
    }),
    Product.create({
      name: "Samgyetang",
      imageURL:
        "https://a.cdn-hotels.com/gdcs/production147/d1051/8bc6d80d-36d3-4a76-a495-1447aeb26c84.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      description:
        "Hot, nutritious stew with a small spring chicken stuffed with chestnuts, garlic, dried jujubes, ginseng, glutinous rice, and gingko nuts",
      price: 29,
      calories: 820,
    }),

    Product.create({
      name: "Lamb Kebab",
      imageURL:
        "https://s3-media0.fl.yelpcdn.com/bphoto/KC1qSLczwNDRF90QX2ycWQ/o.jpg",
      description:
        "Premium leg of lamb marinated in spices and grilled on skewers, served with bulgur and grilled vegetables",
      price: 20,
      calories: 800,
    }),
    Product.create({
      name: "Chicken Curry",
      imageURL:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      description:
        "Boneless chicken stewed with onion, zucchini, garbanzo, and spinach stewed in a creamy, tomato based curry with your choice of rice or naan",
      price: 19,
      calories: 900,
    }),
    Product.create({
      name: "Pomegranate Kebab",
      imageURL:
        "https://s3-media0.fl.yelpcdn.com/bphoto/1D_UOB-0h4_EEfmowqD4rA/o.jpg",
      description:
        "Tender ground lamb and beef kebab stuffed with spinach and topped with a bright pomegranate glaze",
      price: 20,
      calories: 900,
    }),
    Product.create({
      name: "Divan Kebab",
      imageURL:
        "https://s3-media0.fl.yelpcdn.com/bphoto/zbHi_1MdVED82JutTNZ6zg/o.jpg",
      description:
        "Grilled hand-minced lamb and beef kebab wrapped inside chewy lavash flatbread with melted mozzarella cheese and yogurt sauce",
      price: 22,
      calories: 1200,
    }),
    Product.create({
      name: "Falafel",
      imageURL:
        "https://s3-media0.fl.yelpcdn.com/bphoto/3B1TDwlr8cffrMM3d9Ejbg/o.jpg",
      description:
        "Deep fried mashed garbanzo beans seasoned with parsley, sesame seeds, and spices served with a hummus dip, tzatziki sauce, sweet chili sauce, and organic spring salad",
      price: 22,
      calories: 1200,
    }),
    Product.create({
      name: "Beyti Kebab",
      imageURL:
        "https://s3-media0.fl.yelpcdn.com/bphoto/bMr0E0mWR5xr2aQSYj1IvA/o.jpg",
      description:
        "Seasoned hand-minced lamb wrapped in chewy lavash flatbread covered in melted butter and tomato sauce, oven baked and topped with a light yogurt sauce",
      price: 22,
      calories: 1200,
    }),
    Product.create({
      name: "Adana Kebab",
      imageURL:
        "https://images.pexels.com/photos/6419704/pexels-photo-6419704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Long, hand-minced lamb kebab mounted on a wide iron skewer and grilled on an open mangal filled with burning charcoal, served with bulgur and organic spring salad ",
      price: 24,
      calories: 1500,
    }),
    Product.create({
      name: "Moussaka",
      imageURL:
        "https://media.istockphoto.com/photos/portion-of-moussaka-with-eggplant-on-a-plate-macro-horizontal-picture-id511068964",
      description:
        "Layers of eggplant & potatoes w/ ground lamb & beef topped in béchamel sauce served w/rice",
      price: 24,
      calories: 1500,
    }),
    Product.create({
      name: "Kofte",
      imageURL:
        "https://s3-media0.fl.yelpcdn.com/bphoto/MY8WCZp-uvSMB7dVs-hheg/o.jpg",
      description:
        "Rich tomato meat sauce layered with eggplant instead of pasta sheets, and topped with a thick layer of béchamel sauce",
      price: 24,
      calories: 1500,
    }),
    Product.create({
      name: "Gyro Wrap",
      imageURL:
        "https://s3-media0.fl.yelpcdn.com/bphoto/lTJo63zyeal3qmcOiEYynQ/o.jpg",
      description:
        "Your choice of chicken, beef or lamb wrapped in chewy lavash flatbread with organic greens, chopped onions, diced tomatoes, and a tahini sauce drizzle",
      price: 24,
      calories: 1500,
    }),
  ]);

  const orders = await Promise.all([
    //Order 1 for murphy
    Order.create({
      userId: 1,
      isFulfilled: false,
    }),

    //Order 2 for cole
    Order.create({
      userId: 2,
      isFulfilled: false,
    }),
  ]);

  const orderProduct = await Promise.all([
    //add 4 tacos to murphy's order 1
    OrderProduct.create({
      orderId: 1,
      productId: 1,
      quantity: 4,
    }),
    // //add 3 chicken curry to murphy's order 1
    // OrderProduct.create({
    //   orderId: 1,
    //   productId: 4,
    //   quantity: 3,
    // }),
    //add 10 ramen to cole's order 2
    OrderProduct.create({
      orderId: 2,
      productId: 2,
      quantity: 10,
    }),
    //add 2 kebabs to cole's order 2
    OrderProduct.create({
      orderId: 2,
      productId: 3,
      quantity: 2,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
