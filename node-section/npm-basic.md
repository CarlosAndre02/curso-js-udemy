## NPM Basics Commands
- npm install -> Instala um pacote
- npm unistall -> Desintala um pacote
- npm install pacote@versão -> Instala uma versão específica do pacote
- npm install -D -> Instala como dev dependence
- npm install -E -> Instala uma versão específica do pacote, que não será atualizado
- npm update -> Atualiza o pacote
- npm outdated -> Mostra quais pacotes estão desatualizados
- npm ls --depth=0 -> Lista os pacotes que foram instalados e suas versões

## Estrutura das versões
- 4.5.8 (major.minor.patch) onde:
    - Major: Versão nova do pacote, que pode causar incompatibidades
    - Minor: Features adicionadas ou removidas que não causarão incompatibidades
    - patch: Correções de bugs, etc
- "^4.5.8" -> o circunflexo indica que o minor e o patch serão atualizados
- "~4.5.8" -> o til indica que o patch será atualizado