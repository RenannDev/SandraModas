# 👗

## 🌟 Visão Geral

Este projeto é um visualizador 3D interativo de um **Manequim de Costura** (Dress Form), desenvolvido usando a biblioteca **Three.js**. O foco é exibir o tronco humano e os braços com proporções precisas para facilitar o design e a visualização de roupas em um ambiente web.

O modelo 3D foi customizado para exibir apenas o tronco e os braços, excluindo cabeça, pescoço e pernas, conforme a necessidade de prototipagem de vestuário.

---

## ✨ Funcionalidades

* **Modelo 3D Customizado:** Exibição detalhada do tronco e braços de um manequim.
* **Controles Interativos:** Permite ao usuário rotacionar e aplicar zoom no modelo 3D.
* **Iluminação Otimizada:** Configuração de luzes (como `HemisphereLight` e `DirectionalLight`) para destacar a textura e o volume do manequim.
* **Performance Web:** Utilização de arquivos `.gltf` ou `.fbx` (ou outra otimização) para carregamento rápido e renderização eficiente.

---

## 🛠️ Tecnologias Utilizadas

* **Three.js:** Biblioteca principal para renderização 3D em WebGL.
* **JavaScript (ES6+):** Linguagem de programação.
* **HTML/CSS:** Estrutura base da página.
* **GLTFLoader/FBXLoader:** Para carregar o modelo 3D otimizado.

---

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

Você precisará de um servidor web local, pois navegadores modernos geralmente bloqueiam o carregamento de arquivos (`.gltf`, `.json`, etc.) diretamente via `file://`.

**Opção recomendada (via Node.js):**

```bash
# Se você tiver o Node.js instalado, instale o http-server globalmente
npm install -g http-server
