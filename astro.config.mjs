import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://xax-ale.github.io',
    base: '/Portifolio-de-projetos',
  vite: {
    build: {
      rollupOptions: {
        external: [
          /public\/.*\.png$/, // Regex para tratar imagens PNG na pasta public
          /public\/.*\.jpg$/, // Adicione outros formatos de imagem conforme necessário
        ],
      },
    },
  },
});
