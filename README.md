# Calculadora de Impressão 3D

Uma calculadora web para precificar impressões 3D, desenvolvida com Next.js, React e TypeScript. Esta ferramenta ajuda você a calcular o custo real de suas impressões 3D, considerando filamento, energia elétrica, custos de máquina e margem de lucro.

## 🚀 Funcionalidades

- **Cálculo de custos de filamento**: Considera o peso da impressão e o custo do filamento por quilograma
- **Cálculo de energia elétrica**: Calcula o consumo baseado na potência da impressora (Ender 3 V3 KE - 0.35kW)
- **Custo de máquina e manutenção**: Inclui custos operacionais por hora
- **Desperdício de filamento**: Opção para incluir 5% de desperdício no cálculo
- **Margem de lucro**: Permite adicionar uma porcentagem de lucro ao preço final
- **Persistência de dados**: Salva automaticamente suas configurações no navegador
- **Interface responsiva**: Funciona perfeitamente em desktop e mobile

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org/) - Framework React
- [React 19](https://react.dev/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Estilização
- [DaisyUI](https://daisyui.com/) - Componentes UI

## 📦 Instalação

1. Clone o repositório:

```bash
git clone <seu-repositorio>
cd 3d-priting-calculator
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 💡 Como Usar

1. **Configure os custos base**:

   - Valor do filamento (R$/kg)
   - Valor do kWh de energia elétrica
   - Custo da máquina + manutenção (R$/h)
   - Percentual de lucro desejado

2. **Informe os dados da impressão**:

   - Peso da impressão em gramas
   - Tempo de impressão em minutos

3. **Selecione o que incluir no cálculo**:
   - Marque/desmarque os checkboxes para incluir ou excluir cada custo
   - O valor final será calculado automaticamente

## 📊 Fórmulas de Cálculo

- **Custo de filamento**: `(Valor do filamento / 1000) × Peso efetivo`
- **Custo de energia**: `0.35kW × (Tempo em horas) × Valor do kWh`
- **Custo de máquina**: `Custo por hora × Tempo em horas`
- **Preço sem lucro**: `Soma de todos os custos incluídos`
- **Lucro**: `Preço sem lucro × (Percentual de lucro / 100)`
- **Preço final**: `Preço sem lucro + Lucro`

## 🎨 Personalização

Os valores padrão podem ser ajustados no arquivo `src/components/Forms/index.tsx`:

- `PRINTER_POWER_KW`: Potência da impressora em kW (padrão: 0.35)
- `FILAMENT_WASTE_FACTOR`: Fator de desperdício (padrão: 1.05 = 5%)

## 📝 Licença

Este projeto é de uso pessoal.

## 👤 Autor

Yas Castro - [yascastro.com.br](https://www.yascastro.com.br)
