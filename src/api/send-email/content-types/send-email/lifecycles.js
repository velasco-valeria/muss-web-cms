module.exports = {
    async afterCreate(event) {
        const { result } = event;

        const ctx = strapi.requestContext.get();

        const attachments = [
            {
                filename: ctx.request.files['files.file'].name,
                path: ctx.request.files['files.file'].path,
                cid: ctx.request.files['files.file'].name,
            },
        ];

        try {
            await strapi.plugin('email').service('email').send({
                to: "comercial@mussecuador.com",
                from: "velasco.valeria@mussecuador.com",
                subject: `Propuesta por ${result.customer_name}`,
                text: `${result.message}`,
                html: `
                <h4>${result.customer_name}</h4>
                <div><b>Correo de contacto:<b> ${result.email}</div>
                <div><b>Número de contacto:<b> ${result.option}</div>
                <div><b>Tipo de proyecto:<b> ${result.platform}</div>
                <hr/>
                <span>${result.message}</span>
                `,
                attachments
            });
        } catch(err) {
            console.log(err);
        }
    }
}
