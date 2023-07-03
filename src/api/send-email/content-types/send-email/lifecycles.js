module.exports = {
    async afterCreate(event) {
        const { result } = event;

        const ctx = strapi.requestContext.get();
        console.log(ctx.request.files['files.file'].path);

        const attachments = [
            {
                filename: ctx.request.files['files.file'].name,
                path: ctx.request.files['files.file'].path,
                cid: ctx.request.files['files.file'].name,
            },
        ];
          
        try {
            await strapi.plugin('email').service('email').send({
                to: `aldormazon@gmail.com`,
                from: 'aldomazrocket@gmail.com',
                subject: `Propuesta por ${result.customer_name}`,
                text: `${result.message}`,
                html: `
                <h4>${result.customer_name}</h4>
                <span>${result.message}</span>
                `,
                attachments
            });
        } catch(err) {
            console.log(err);
        }
    }
}