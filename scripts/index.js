const frontEndJobs = [
    {
        id:01,
        title: "Desenvolvedor Frontend",
        descrription:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000",
        modality: ["Full Time","Remote"]
    },
    {
        id:02,
        title: "Frontend Developer",
        descrription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
        modality: ["Full Time","Remote"]
    },
    {
        id:03,
        title: "Desenvolvedor Frontend",
        descrription:"The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures,",
        modality: ["Full Time","Presencial"]
    },
    {
        id:04,
        title: "Programador Frontend",
        descrription:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms",
        modality: ["Full Time","Remote"]
    },
    {
        id:05,
        title: "UI Developer",
        descrription:"But in certain circumstances and owing to the claims of duty or the obligations",
        modality: ["Full Time","Remote"]
    },
    {
        id:06,
        title: "Desenvolvedor Frontend",
        descrription:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        modality: ["Full Time","Remote"]
    },
]

const backEndJobs = [
    {
        id:01,
        title: "Desenvolvedor Backend",
        descrription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        modality: ["Full Time","Remote"]
    },
    {
        id:02,
        title: "Desenvolvedor Backend",
        descrription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        modality: ["Full Time","Presencial"]
    },
    {
        id:03,
        title: "Desenvolvedor Node",
        descrription:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from ",
        modality: ["Full Time","Remote"]
    },
    {
        id:04,
        title: "Dev Javascript Backend",
        descrription:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        modality: ["Full Time","Remote"]
    },
    {
        id:05,
        title: "Desenvolvedor Java",
        descrription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        modality: ["Full Time","Remote"]
    },
    {
        id:06,
        title: "Backend Developer",
        descrription:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
        modality: ["Full Time","Remote"]
    },
]

const feContainer = document.querySelector('.feContainer')
const beContainer = document.querySelector('.beContainer')

const ulFront = document.querySelector('.ulFront')
const ulBack = document.querySelector('.ulBack')

const buttonFront = document.querySelector('#front')
const buttonBack = document.querySelector('#back')

function criarVagaFrontEnd(){
    for (let i = 0; i < frontEndJobs.length; i++){
        let liFront = document.createElement('li')
        liFront.classList.add('liFront')
        let headerVaga = document.createElement('div')
        headerVaga.classList.add('headerVaga')
        let vagaImg = document.createElement('div')
        vagaImg.classList.add('vagImg')
        let letraG = document.createElement('span')
        letraG.classList.add('letraG')
        letraG.innerHTML = "G"
        let infosContainer = document.createElement('div')
        infosContainer.classList.add('infosContainer')
        let title = document.createElement('span')
        title.classList.add('infoTitle')
        title.innerText = frontEndJobs[i].title
        let cidade = document.createElement('span')
        cidade.classList.add('infoCidade')
        cidade.innerHTML = "Brasil"
        let descricao = document.createElement('span')
        descricao.classList.add('infoDescricao')
        descricao.innerText = frontEndJobs[i].descrription
        let modalityContainer = document.createElement('div')
        modalityContainer.classList.add('modalityContainer')
        let modalityUm = document.createElement('span')
        modalityUm.classList.add('modality')
        modalityUm.innerHTML = frontEndJobs[i].modality[0]
        let modalityDois = document.createElement('span')
        modalityDois.classList.add('modality')
        modalityDois.innerHTML = frontEndJobs[i].modality[1]
        
        ulFront.appendChild(liFront)
        liFront.appendChild(headerVaga)
        headerVaga.appendChild(vagaImg)
        vagaImg.appendChild(letraG)

        headerVaga.appendChild(infosContainer)
        infosContainer.appendChild(title)
        infosContainer.appendChild(cidade)

        liFront.appendChild(descricao)

        liFront.appendChild(modalityContainer)
        modalityContainer.appendChild(modalityUm)
        modalityContainer.appendChild(modalityDois)
    }
}
criarVagaFrontEnd()

function criarVagaBackEnd(){
    for (let i = 0; i < backEndJobs.length; i++){
        let liBack = document.createElement('li')
        liBack.classList.add('liBack')
        let headerVaga = document.createElement('div')
        headerVaga.classList.add('headerVaga')
        let vagaImg = document.createElement('div')
        vagaImg.classList.add('vagImg')
        let letraG = document.createElement('span')
        letraG.classList.add('letraG')
        letraG.innerHTML = "G"
        let infosContainer = document.createElement('div')
        infosContainer.classList.add('infosContainer')
        let title = document.createElement('span')
        title.classList.add('infoTitle')
        title.innerText = backEndJobs[i].title
        let cidade = document.createElement('span')
        cidade.classList.add('infoCidade')
        cidade.innerHTML = "Brasil"
        let descricao = document.createElement('span')
        descricao.classList.add('infoDescricao')
        descricao.innerText = backEndJobs[i].descrription
        let modalityContainer = document.createElement('div')
        modalityContainer.classList.add('modalityContainer')
        let modalityUm = document.createElement('span')
        modalityUm.classList.add('modality')
        modalityUm.innerHTML = backEndJobs[i].modality[0]
        let modalityDois = document.createElement('span')
        modalityDois.classList.add('modality')
        modalityDois.innerHTML = backEndJobs[i].modality[1]
        
        ulBack.appendChild(liBack)
        liBack.appendChild(headerVaga)
        headerVaga.appendChild(vagaImg)
        vagaImg.appendChild(letraG)

        headerVaga.appendChild(infosContainer)
        infosContainer.appendChild(title)
        infosContainer.appendChild(cidade)

        liBack.appendChild(descricao)

        liBack.appendChild(modalityContainer)
        modalityContainer.appendChild(modalityUm)
        modalityContainer.appendChild(modalityDois)
    }
}
criarVagaBackEnd()

buttonFront.addEventListener('click', function(){
    beContainer.classList.add('hidden')
    feContainer.classList.remove('hidden')
})
buttonBack.addEventListener('click', function(){
    feContainer.classList.add('hidden')
    beContainer.classList.remove('hidden')
})