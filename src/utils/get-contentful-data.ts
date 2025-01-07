import * as contentful from "contentful";
interface ContentfulImage {
    fields: { file: { url: string } };
  }
  
  interface Item {
    fields: {
      customerLogo: ContentfulImage;
      clientPhoto: ContentfulImage;
      teamPhoto: ContentfulImage;
      slug: string;
      name: string;
      job: string;
      feedback: string;
      title: string;
      expertise: string;
      description: string;
      clientName: string;
      clientJob: string;
      clientFeedback: string;
      contact: string;
    };
  }

const client = contentful.createClient({
    space: "uzewetyibsdd",
    environment: "master",
    accessToken: "xswXj6XK376YpSvSbbqY4wASIzNU7rc18DcY11vO5JU",
  });
  



  export async function getAllEntries() {
    try {
      const data = await client.getEntries();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function getAllCompanyOverview() {
    try {
      const data = await client.getEntries({ content_type: "companyOverview" });
      return data.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.description,
          slug: item.fields.slug,
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function getAllCompanyService() {
    try {
      const data = await client.getEntries({ content_type: "companyServices" });
      return data.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.description,
          slug: item.fields.slug,
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function getAllCompanyCustomer() {
    try {
      const data = (await client.getEntries({
        content_type: "companyCustomers",
      })) as unknown as { items: [] };
      return data.items.map((item: Item) => {
        const brandUrl = item?.fields?.customerLogo?.fields?.file.url;
        return {
          slug: item.fields.slug,
          customerLogo: `https:${brandUrl}`,
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
  
export async function getAllTestimonial() {
    try {
      const data = (await client.getEntries({
        content_type: "companyTestimonials",
      })) as unknown as { items: [] };
      return data.items.map((item: Item) => {
        const clientPhotoUrl = item?.fields?.clientPhoto?.fields?.file.url;
        return {
          name: item.fields.clientName,
          slug: item.fields.slug,
          job: item.fields.clientJob,
          feedback: item.fields.clientFeedback,
          clientPhoto: `https:${clientPhotoUrl}`,
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function getWeldcraftTeam() {
    try {
      const data = (await client.getEntries({
        content_type: "weldcraftTeam",
      })) as unknown as { items: [] };
      return data.items.map((item: Item) => {
        const teamPhotoUrl = item?.fields?.teamPhoto?.fields?.file.url;
        return {
          name: item.fields.name,
          slug: item.fields.slug,
          title: item.fields.title,
          expertise: item.fields.expertise,
          contact: item.fields.contact,
          description: item.fields.description,
          teamPhoto: `https:${teamPhotoUrl}`,
        };
      });
    } catch (error) {
      console.error(error);
    }
  }