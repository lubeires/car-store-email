const sendEmail = require("./send.js");
const createEmailContent = require("./content.js");

const clients = [
  {
    name: "João Silva",
    email: "joao.silva@example.com",
    authorizes: true,
  },
  {
    name: "Maria Santos",
    email: "maria.santos@example.com",
    authorizes: false,
  },
  {
    name: "Pedro Oliveira",
    email: "pedro.oliveira@example.com",
    authorizes: true,
  },
  {
    name: "Ana Costa",
    email: "ana.costa@example.com",
    authorizes: true,
  },
];

const today = new Date();
const isMonday = today.getDay() === 1;

if (isMonday) {
  for (const client of clients) {
    if (client.authorizes) {
      const emailContent = createEmailContent(client.name);
      const result = sendEmail(
        client.email,
        emailContent.subject,
        emailContent.body
      );
      console.log(`${result.status}: ${result.message}`);
    }
  }
}
