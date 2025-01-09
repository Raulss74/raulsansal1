import profilePic from '../assets/rss_profile-pic-6.png';
import eskLogo from '../assets/esk_sym_csm.svg';

const $links = document.getElementById("links");
const $name = document.querySelector("h1");

const data = {
  name: "Raúl Sánchez Salgado",
  nickname: "raulsansal",
  description:
    "Trabajo con personas y organizaciones que quieren aplicar la estrategia en sus proyectos políticos y ampliar sus posibilidades de éxito.",
  avatar: profilePic,
  social: [
    {
      name: "twitter",
      url: "https://x.com/Raulsansal",
      username: "raulsansal",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/raul.sanchez.sal/",
      username: "raulsansal",
    },
    {
      name: "github",
      url: "https://github.com/Raulss74",
      username: "raulsansal",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/raulsansal",
      username: "raulsansal",
    },
  ],
  links: [
    {
      name: "analisis",
      url: "https://www.notion.so/raulsansal/351df79caa8f480fa325f2dd3ebbd4f8?v=92ae2e31ccac48e0923feb06620b7fb3&pvs=4",
      color: "yellow",
      emoji: "🆎",
    },
    {
      name: "Design System",
      url: "https://www.notion.so/raulsansal/Fundations-e31bfae79fef4f50b13556896d562b96?pvs=4",
      color: "blue",
      emoji: "🔷",
    },
  ],
  footer: "Made with love on México",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links?.map((link) => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
            <a
              class="text-sm font-bold text-${link.color} text-center hover:text-${link.color}-800 cursor-pointer"
              href="${link.url}"
              target="_blank"
            >
              ${link.name}
            </a>
            <span>${link.emoji}</span>
          </div>`;
  }).join('');
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);

  // Set the image sources
  document.querySelector('img[alt="Raúl Sánchez Salgado"]').src = data.avatar;
  document.querySelector('img[alt="logotipo Eskemma"]').src = eskLogo;
};

main();
