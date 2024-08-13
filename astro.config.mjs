import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://xax-ale.github.io',
    base: '/Portifolio-de-projetos',
        rollupOptions: {
      external: [
        '/Portifolio-de-projetos/imagens/portifólio.png',
        '/Portifolio-de-projetos/imagens/Arquivos%20de%20planilhas%20e%20csv.png',
        '/Portifolio-de-projetos/imagens/Codigo%20do%20exemplo%20de%20planilha%20com%20javascript.png',
        '/Portifolio-de-projetos/imagens/Dashboard%20com%20dax.png',
        '/Portifolio-de-projetos/imagens/Dashboard%20com%20python.png',
        '/Portifolio-de-projetos/imagens/Dashboard%20de%20gestão.png',
        '/Portifolio-de-projetos/imagens/Dashboard%20e%20planilha%20de%20Gestão.png',
        '/Portifolio-de-projetos/imagens/Exemplo%20de%20planilha%20com%20javascript.png',
        '/Portifolio-de-projetos/imagens/Planilha%20automática%20com%20javascript.png',
        '/Portifolio-de-projetos/imagens/Planilha%20de%20gestão%20zoom.png',
        '/Portifolio-de-projetos/imagens/Planilha%20de%20gestão.png',
      ],
    },
});
