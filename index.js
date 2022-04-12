const Eris = require("eris");
const axios = require('axios')
const config = require('./config.json')

const bot = new Eris(config.token)
const options = {debug: false,invalidClientInstanceError: true,ignoreRequestErrors: false};

const ErisComponents = require('eris-components');
const eClient = ErisComponents.Client(bot, options);

bot.on('ready',() => {
    console.log('BOT ON => By: Jota Pe#6786');
})


bot.on("messageCreate", async (msg) => {

    if (!msg.content.startsWith(config.prefix)) return;
    const Message = msg.content.split(" ")
    const cmd = Message[0].replace(config.prefix, "")

    if(cmd == "createticket"){
        if(config.owner == msg.author.id){
            bot.createMessage(msg.channel.id,{embed:{
                title: "Ticket",
                description: "Está com algum problema ou dúvida?\n Selecione a opção que se encaixa na sua situaçao para podemos melhor atende-lo\n Lembrando que o seu Ticket pode nao ser visto na Hora pedimos a paciencia e a compreensão de todos esse processo pode levar ate 72 Horas",
                color: 15158332,
                footer: {text:"Ticket - New Jersey"}
            },
            "components": [
                {
                    "type": 1,
                    "components": [ 
                        {
                            type:2,
                            label:"🐛 Ticket Bugs",
                            style:3,
                            custom_id: "open-ticketbugs"
                        },   
                        {
                            type:2,
                            label:"🔨 Ticket Denuncias",
                            style:3,
                            custom_id: "open-ticketdenuncia"
                        }, 
                        {
                            type:2,
                            label:"❔ Ticket Outros",
                            style:3,
                            custom_id: "open-ticketoutros"
                        },                                                                      
                    ]                              
                } 
            ]                            
        })
        }
    }
})

bot.on("messageCreate", async (msg) => {

    if (!msg.content.startsWith(config.prefix)) return;
    const Message = msg.content.split(" ")
    const cmd = Message[0].replace(config.prefix, "")


    if(cmd == "createdonate"){
        if(config.owner == msg.author.id){
            bot.createMessage(msg.channel.id,{embed:{
                title: "Doação",
                description: "Esta pensando em fazer uma doação para ajudar o servidor escolha uma das opções abaixo que se enquadra no tipo de doação que você pretende fazer",
                color: 15158332,
                footer: {text:"Doação - New Jersey"}
            },
            "components": [
                {
                    "type": 1,
                    "components": [
                        {
                            type:2,
                            label:"💎 Doação Combo",
                            style:3,
                            custom_id: "open-combo"
                        },  
                        {
                            type:2,
                            label:"🚗 Doação Veiculos Avulso",
                            style:3,
                            custom_id: "open-carroavulso"
                        },   
                        {
                            type:2,
                            label:"💳 Doação Coins",
                            style:3,
                            custom_id: "open-coins"
                        }, 
                        {
                            type:2,
                            label:"🏘️ Doação Casas/Items Premium",
                            style:3,
                            custom_id: "open-casas"
                        },                                                                         
                    ]                              
                } 
            ]                            
        })
        }
    }
})

bot.on('interactionCreate', (response) =>{

    if(response.data.custom_id == "open-casas"){
        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{}})
        const TicketID = Math.floor(Math.random()*(999-100+1)+100)
        const GuildID = response.guild_id
        let  roleID  =  "825566012362588190" ;  
        let  Owner  =  "890591645303734302" ;
        let  Admin  =  "890592220376358943" ;
        let  Moderador  =  "890591488763920484" ;
        let  Suporte  =  "890593199679225916" ;
            bot.createChannel(GuildID,`🏘️-Doação-Demais-0${TicketID}`,0,{
                permissionOverwrites: [
                {
                    id: response.member.user.id,
                    type:1,
                    allow: 3072
                },   
                {
                    id: roleID,
                    deny: 1024,
                },    
                {
                    id: Owner,
                    allow: 1024,
                },
                {
                    id: Admin,
                    allow: 1024,
                },
                {
                    id: Moderador,
                    allow: 1024,
                },
                {
                    id: Suporte,
                    allow: 1024,
                },                                                                                                                        
                {
                    id: GuildID,
                    type:1,
                    deny: 1024

                }
            ],
            type: 'text',
        }).then(async (channel) =>{

        return bot.createMessage(channel.id, {
            embed: {
                title: "Doação",
                description: "Aceitamos esses Tipos de Pagamento\nPayPal:Em-Breve\nPagseguro:Em-breve\nPix:Em-Breve\nPicpay:Em-Breve\nBoleto:Em-Breve\n  \n  Logo apos Efetuar o pagamento mandar o comprovante na sala para podermos ativar os beneficios da Doação em caso de Boleto Marque o Jota Pê na sala e solicite seu Boleto\n  \n  PS:Pagamento em Boleto so serão ativado depois que o boleto for compensado",
                color: 15158332,
                footer: {text:'Doação - Central City'},
                timestamp: new Date()
            },
            "components": [{
                "type":1,
                "components":[{
                    "type":2,
                    "label":"🔒 Close",
                    "style":2,
                    "custom_id":"close-casas"
                }]
            }]
        })
    })
    }else if(response.data.custom_id == "close-casas"){

        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{components:[]}})

        setTimeout(() => {
            bot.deleteChannel(response.channel_id,'Closed-ticket')
        }, 10000);

        bot.createMessage(response.channel_id,
            {embed:{
            title: "Doação Encerrado",
            description: "Seu ticket foi encerrado e será apagado em 10 segundos\nCaso necessite de ajude novamente, você pode solicitar outro!.",
            color:15158332,
            timestamp: new Date(),
            footer: {text:"Doação - Central City"} 
        }})
    }
})

bot.on('interactionCreate', (response) =>{

    if(response.data.custom_id == "open-coins"){
        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{}})
        const TicketID = Math.floor(Math.random()*(999-100+1)+100)
        const GuildID = response.guild_id
        let  roleID  =  "825566012362588190" ;  
        let  Owner  =  "890591645303734302" ;
        let  Admin  =  "890592220376358943" ;
        let  Moderador  =  "890591488763920484" ;
        let  Suporte  =  "890593199679225916" ;
            bot.createChannel(GuildID,`💳-Doação-coins-0${TicketID}`,0,{
                permissionOverwrites: [
                {
                    id: response.member.user.id,
                    type:1,
                    allow: 3072
                },   
                {
                    id: roleID,
                    deny: 1024,
                },    
                {
                    id: Owner,
                    allow: 1024,
                },
                {
                    id: Admin,
                    allow: 1024,
                },
                {
                    id: Moderador,
                    allow: 1024,
                },
                {
                    id: Suporte,
                    allow: 1024,
                },                                                                                                                        
                {
                    id: GuildID,
                    type:1,
                    deny: 1024

                }
            ],
            type: 'text',
        }).then(async (channel) =>{

        return bot.createMessage(channel.id, {
            embed: {
                title: "Doação",
                description: "Cada Coin Está Custando Atualmente R$:1,00\n  \n  Aceitamos esses Tipos de Pagamento\nPayPal:Em-Breve\nPagseguro:Em-breve\nPix:Em-Breve\nPicpay:Em-Breve\nBoleto:Em-Breve\n  \n  Logo apos Efetuar o pagamento mandar o comprovante na sala para podermos ativar os beneficios da Doação em caso de Boleto Marque o Jota Pê na sala e solicite seu Boleto\n  \n  PS:Pagamento em Boleto so serão ativado depois que o boleto for compensado",
                color: 15158332,
                footer: {text:'Doação - Central City'},
                timestamp: new Date()
            },
            "components": [{
                "type":1,
                "components":[{
                    "type":2,
                    "label":"🔒 Close",
                    "style":2,
                    "custom_id":"close-coins"
                }]
            }]
        })
    })
    }else if(response.data.custom_id == "close-coins"){

        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{components:[]}})

        setTimeout(() => {
            bot.deleteChannel(response.channel_id,'Closed-ticket')
        }, 10000);

        bot.createMessage(response.channel_id,
            {embed:{
            title: "Doação Encerrado",
            description: "Seu ticket foi encerrado e será apagado em 10 segundos\nCaso necessite de ajude novamente, você pode solicitar outro!.",
            color:15158332,
            timestamp: new Date(),
            footer: {text:"Doação - Central City"} 
        }})
    }
})

bot.on('interactionCreate', (response) =>{

    if(response.data.custom_id == "open-carroavulso"){
        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{}})
        const TicketID = Math.floor(Math.random()*(999-100+1)+100)
        const GuildID = response.guild_id
        let  roleID  =  "825566012362588190" ;  
        let  Owner  =  "890591645303734302" ;
        let  Admin  =  "890592220376358943" ;
        let  Moderador  =  "890591488763920484" ;
        let  Suporte  =  "890593199679225916" ;
            bot.createChannel(GuildID,`🚗-Doação-veiculos-0${TicketID}`,0,{
                permissionOverwrites: [
                {
                    id: response.member.user.id,
                    type:1,
                    allow: 3072
                },   
                {
                    id: roleID,
                    deny: 1024,
                },    
                {
                    id: Owner,
                    allow: 1024,
                },
                {
                    id: Admin,
                    allow: 1024,
                },
                {
                    id: Moderador,
                    allow: 1024,
                },
                {
                    id: Suporte,
                    allow: 1024,
                },                                                                                                                        
                {
                    id: GuildID,
                    type:1,
                    deny: 1024

                }
            ],
            type: 'text',
        }).then(async (channel) =>{

        return bot.createMessage(channel.id, {
            embed: {
                title: "Doação",
                description: "Aceitamos esses Tipos de Pagamento\nPayPal:Em-Breve\nPagseguro:Em-breve\nPix:Em-Breve\nPicpay:Em-Breve\nBoleto:Em-Breve\n  \n  Logo apos Efetuar o pagamento mandar o comprovante na sala para podermos ativar os beneficios da Doação em caso de Boleto Marque o Jota Pê na sala e solicite seu Boleto\n  \n  PS:Pagamento em Boleto so serão ativado depois que o boleto for compensado",
                color: 15158332,
                footer: {text:'Doação - Central City'},
                timestamp: new Date()
            },
            "components": [{
                "type":1,
                "components":[{
                    "type":2,
                    "label":"🔒 Close",
                    "style":2,
                    "custom_id":"close-carroavulso"
                }]
            }]
        })
    })
    }else if(response.data.custom_id == "close-carroavulso"){

        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{components:[]}})

        setTimeout(() => {
            bot.deleteChannel(response.channel_id,'Closed-ticket')
        }, 10000);

        bot.createMessage(response.channel_id,
            {embed:{
            title: "Doação Encerrado",
            description: "Seu ticket foi encerrado e será apagado em 10 segundos\nCaso necessite de ajude novamente, você pode solicitar outro!.",
            color:15158332,
            timestamp: new Date(),
            footer: {text:"Doação - Central City"} 
        }})
    }
})

bot.on('interactionCreate', (response) =>{

    if(response.data.custom_id == "open-combo"){
        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{}})
        const TicketID = Math.floor(Math.random()*(999-100+1)+100)
        const GuildID = response.guild_id
        let  roleID  =  "825566012362588190" ;  
        let  Owner  =  "890591645303734302" ;
        let  Admin  =  "890592220376358943" ;
        let  Moderador  =  "890591488763920484" ;
        let  Suporte  =  "890593199679225916" ;
            bot.createChannel(GuildID,`💎-Doação-combo-0${TicketID}`,0,{
                permissionOverwrites: [
                {
                    id: response.member.user.id,
                    type:1,
                    allow: 3072
                },   
                {
                    id: roleID,
                    deny: 1024,
                },    
                {
                    id: Owner,
                    allow: 1024,
                },
                {
                    id: Admin,
                    allow: 1024,
                },
                {
                    id: Moderador,
                    allow: 1024,
                },
                {
                    id: Suporte,
                    allow: 1024,
                },                                                                                                                        
                {
                    id: GuildID,
                    type:1,
                    deny: 1024

                }
            ],
            type: 'text',
        }).then(async (channel) =>{

        return bot.createMessage(channel.id, {
            embed: {
                title: "Doação",
                description: "Aceitamos esses Tipos de Pagamento\nPayPal:Em-Breve\nPagseguro:Em-breve\nPix:Em-Breve\nPicpay:Em-Breve\nBoleto:Em-Breve\n  \n  Logo apos Efetuar o pagamento mandar o comprovante na sala para podermos ativar os beneficios da Doação em caso de Boleto Marque o Jota Pê na sala e solicite seu Boleto\n  \n  PS:Pagamento em Boleto so serão ativado depois que o boleto for compensado",
                color: 15158332,
                footer: {text:'Doação - Central City'},
                timestamp: new Date()
            },
            "components": [{
                "type":1,
                "components":[{
                    "type":2,
                    "label":"🔒 Close",
                    "style":2,
                    "custom_id":"close-combo"
                }]
            }]
        })
    })
    }else if(response.data.custom_id == "close-combo"){

        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{components:[]}})

        setTimeout(() => {
            bot.deleteChannel(response.channel_id,'Closed-ticket')
        }, 10000);

        bot.createMessage(response.channel_id,
            {embed:{
            title: "Doação Encerrado",
            description: "Seu ticket foi encerrado e será apagado em 10 segundos\nCaso necessite de ajude novamente, você pode solicitar outro!.",
            color:15158332,
            timestamp: new Date(),
            footer: {text:"Doação - Central City"} 
        }})
    }
})

bot.on('interactionCreate', (response) =>{

    if(response.data.custom_id == "open-ticket"){
        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{}})
        const TicketID = Math.floor(Math.random()*(999-100+1)+100)
        const GuildID = response.guild_id
        let  roleID  =  "825566012362588190" ;  
        let  Owner  =  "890591645303734302" ;
        let  Admin  =  "890592220376358943" ;
        let  Moderador  =  "890591488763920484" ;
        let  Suporte  =  "890593199679225916" ;
            bot.createChannel(GuildID,`💎-ticket-doaçoes0${TicketID}`,0,{
                permissionOverwrites: [
                {
                    id: response.member.user.id,
                    type:1,
                    allow: 3072
                },   
                {
                    id: roleID,
                    deny: 1024,
                },    
                {
                    id: Owner,
                    allow: 1024,
                },
                {
                    id: Admin,
                    allow: 1024,
                },
                {
                    id: Moderador,
                    allow: 1024,
                },
                {
                    id: Suporte,
                    allow: 1024,
                },                                                                                                                        
                {
                    id: GuildID,
                    type:1,
                    deny: 1024

                }
            ],
            type: 'text',
        }).then(async (channel) =>{

        return bot.createMessage(channel.id, {
            embed: {
                title: "Ticket",
                description: "Aguarde até que um dos atendentes te responda \nSe sua solicitação foi resolvida por favor clique no botão verde abaixo",
                color: 15158332,
                footer: {text:'Ticket - Central City'},
                timestamp: new Date()
            },
            "components": [{
                "type":1,
                "components":[{
                    "type":2,
                    "label":"🔒 Close",
                    "style":2,
                    "custom_id":"close-ticket"
                }]
            }]
        })
    })
    }else if(response.data.custom_id == "close-ticket"){

        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{components:[]}})

        setTimeout(() => {
            bot.deleteChannel(response.channel_id,'Closed-ticket')
        }, 10000);

        bot.createMessage(response.channel_id,
            {embed:{
            title: "Ticket Encerrado",
            description: "Seu ticket foi encerrado e será apagado em 10 segundos\nCaso necessite de ajude novamente, você pode solicitar outro!.",
            color:15158332,
            timestamp: new Date(),
            footer: {text:"Ticket - Central City"} 
        }})
    }
})
bot.on('interactionCreate', (response) =>{

    if(response.data.custom_id == "open-ticketbugs"){
        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{}})
        const TicketID = Math.floor(Math.random()*(999-100+1)+100)
        const GuildID = response.guild_id
        let  roleID  =  "825566012362588190" ;  
        let  Owner  =  "890591645303734302" ;
        let  Admin  =  "890592220376358943" ;
        let  Moderador  =  "890591488763920484" ;
        let  Suporte  =  "890593199679225916" ;
            bot.createChannel(GuildID,`🐛-ticket-bugs-0${TicketID}`,0,{
                permissionOverwrites: [
                {
                    id: response.member.user.id,
                    type:1,
                    allow: 3072
                },   
                {
                    id: roleID,
                    deny: 1024,
                },    
                {
                    id: Owner,
                    allow: 1024,
                },
                {
                    id: Admin,
                    allow: 1024,
                },
                {
                    id: Moderador,
                    allow: 1024,
                },
                {
                    id: Suporte,
                    allow: 1024,
                },                                                                                                                        
                {
                    id: GuildID,
                    type:1,
                    deny: 1024

                }
            ],
            type: 'text',
        }).then(async (channel) =>{

        return bot.createMessage(channel.id, {
            embed: {
                title: "Ticket",
                description: "Aguarde até que um dos atendentes te responda \nSe sua solicitação foi resolvida por favor clique no botão verde abaixo",
                color: 15158332,
                footer: {text:'Ticket - Central City'},
                timestamp: new Date()
            },
            "components": [{
                "type":1,
                "components":[{
                    "type":2,
                    "label":"🔒 Close",
                    "style":2,
                    "custom_id":"close-ticketbugs"
                }]
            }]
        })
    })
    }else if(response.data.custom_id == "close-ticketbugs"){

        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{components:[]}})

        setTimeout(() => {
            bot.deleteChannel(response.channel_id,'Closed-ticket')
        }, 10000);

        bot.createMessage(response.channel_id,
            {embed:{
            title: "Ticket Encerrado",
            description: "Seu ticket foi encerrado e será apagado em 10 segundos\nCaso necessite de ajude novamente, você pode solicitar outro!.",
            color:15158332,
            timestamp: new Date(),
            footer: {text:"Ticket - Central City"} 
        }})
    }
})
bot.on('interactionCreate', (response) =>{

    if(response.data.custom_id == "open-ticketdenuncia"){
        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{}})
        const TicketID = Math.floor(Math.random()*(999-100+1)+100)
        const GuildID = response.guild_id
        let  roleID  =  "825566012362588190" ;  
        let  Owner  =  "890591645303734302" ;
        let  Admin  =  "890592220376358943" ;
        let  Moderador  =  "890591488763920484" ;
        let  Suporte  =  "890593199679225916" ;
            bot.createChannel(GuildID,`🔨-ticket-denuncia-0${TicketID}`,0,{
                permissionOverwrites: [
                {
                    id: response.member.user.id,
                    type:1,
                    allow: 3072
                },   
                {
                    id: roleID,
                    deny: 1024,
                },    
                {
                    id: Owner,
                    allow: 1024,
                },
                {
                    id: Admin,
                    allow: 1024,
                },
                {
                    id: Moderador,
                    allow: 1024,
                },
                {
                    id: Suporte,
                    allow: 1024,
                },                                                                                                                        
                {
                    id: GuildID,
                    type:1,
                    deny: 1024

                }
            ],
            type: 'text',
        }).then(async (channel) =>{

        return bot.createMessage(channel.id, {
            embed: {
                title: "Ticket",
                description: "Aguarde até que um dos atendentes te responda \nSe sua solicitação foi resolvida por favor clique no botão verde abaixo",
                color: 15158332,
                footer: {text:'Ticket - Central City'},
                timestamp: new Date()
            },
            "components": [{
                "type":1,
                "components":[{
                    "type":2,
                    "label":"🔒 Close",
                    "style":2,
                    "custom_id":"close-ticketdenuncia"
                }]
            }]
        })
    })
    }else if(response.data.custom_id == "close-ticketdenuncia"){

        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{components:[]}})

        setTimeout(() => {
            bot.deleteChannel(response.channel_id,'Closed-ticket')
        }, 10000);

        bot.createMessage(response.channel_id,
            {embed:{
            title: "Ticket Encerrado",
            description: "Seu ticket foi encerrado e será apagado em 10 segundos\nCaso necessite de ajude novamente, você pode solicitar outro!.",
            color:15158332,
            timestamp: new Date(),
            footer: {text:"Ticket - Central City"} 
        }})
    }
})
bot.on('interactionCreate', (response) =>{

    if(response.data.custom_id == "open-ticketoutros"){
        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{}})
        const TicketID = Math.floor(Math.random()*(999-100+1)+100)
        const GuildID = response.guild_id
        let  roleID  =  "825566012362588190" ;  
        let  Owner  =  "890591645303734302" ;
        let  Admin  =  "890592220376358943" ;
        let  Moderador  =  "890591488763920484" ;
        let  Suporte  =  "890593199679225916" ;
            bot.createChannel(GuildID,`❔-ticket-outros-0${TicketID}`,0,{
                permissionOverwrites: [
                {
                    id: response.member.user.id,
                    type:1,
                    allow: 3072
                },   
                {
                    id: roleID,
                    deny: 1024,
                },    
                {
                    id: Owner,
                    allow: 1024,
                },
                {
                    id: Admin,
                    allow: 1024,
                },
                {
                    id: Moderador,
                    allow: 1024,
                },
                {
                    id: Suporte,
                    allow: 1024,
                },                                                                                                                        
                {
                    id: GuildID,
                    type:1,
                    deny: 1024

                }
            ],
            type: 'text',
        }).then(async (channel) =>{

        return bot.createMessage(channel.id, {
            embed: {
                title: "Ticket",
                description: "Aguarde até que um dos atendentes te responda \nSe sua solicitação foi resolvida por favor clique no botão verde abaixo",
                color: 15158332,
                footer: {text:'Ticket - Central City'},
                timestamp: new Date()
            },
            "components": [{
                "type":1,
                "components":[{
                    "type":2,
                    "label":"🔒 Close",
                    "style":2,
                    "custom_id":"close-ticketoutros"
                }]
            }]
        })
    })
    }else if(response.data.custom_id == "close-ticketoutros"){

        axios.post(`https://discord.com/api/v8/interactions/${response.id}/${response.token}/callback`,{type:7,data:{components:[]}})

        setTimeout(() => {
            bot.deleteChannel(response.channel_id,'Closed-ticket')
        }, 10000);

        bot.createMessage(response.channel_id,
            {embed:{
            title: "Ticket Encerrado",
            description: "Seu ticket foi encerrado e será apagado em 10 segundos\nCaso necessite de ajude novamente, você pode solicitar outro!.",
            color:15158332,
            timestamp: new Date(),
            footer: {text:"Ticket - Central City"} 
        }})
    }
})
bot.connect()