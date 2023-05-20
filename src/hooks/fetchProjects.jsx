import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 't0jt61x76dg7',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

function useFetchProjects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  // use getEntries hook to get data from contentful
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });

      const projects = response.items.map((item) => {
        const { image, url, title } = item.fields;
        const img = image?.fields?.file?.url;
        const id = item.sys.id;

        return { url, title, img, id };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
}

export default useFetchProjects;

// client.getEntries({ content_type: 'projects' }).then((res) => console.log(res));
