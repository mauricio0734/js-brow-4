const menu = [
  {
    name: "Home",
    link: "/",
    items: [],
  },
  {
    name: "About",
    link: "/about",
    items: [],
  },
  {
    name: "Products",
    link: "/products",
    items: [
      {
        name: "Product 1",
        link: "/products/1",
        items: [],
      },
      {
        name: "Product 2",
        link: "/products/2",
        items: [
          {
            name: "Product 2.1",
            link: "/products/2/1",
            items: [],
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    link: "/services",
    items: [
      {
        name: "Service 1",
        link: "/services/1",
        items: [
          {
            name: "Service 1.1",
            link: "/services/1/1",
            items: [],
          },
        ],
      },
      {
        name: "Service 2",
        link: "/services/2",
        items: [
          {
            name: "Service 2.1",
            link: "/services/2/1",
            items: [],
          },
          {
            name: "Service 2.2",
            link: "/services/2/2",
            items: [],
          },
        ],
      },
    ],
  },
];
function createMenu(menuItems) {
  const ul = document.createElement("ul");

  menuItems.forEach((menuItem) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = menuItem.name;
    link.href = menuItem.link;
    li.appendChild(link);
    if (menuItem.items.length > 0) {
      const subMenu = createMenu(menuItem.items);
      li.appendChild(subMenu);
    }
    ul.appendChild(li);
  });
  return ul;
}
const container = document.querySelector("#menu-container");
container.appendChild(createMenu(menu));
