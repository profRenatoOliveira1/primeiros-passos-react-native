class PersonRequests {
    private apiUri: string;
    private endpoint: string;

    constructor() {
        this.apiUri = 'http://10.90.14.85:5000';
        this.endpoint = '/api/people';
    }

    public async postPerson(
        person: {
            nome: string,
            sobrenome: string,
            cpf: string,
            telefone: string,
            email: string
        }
    ): Promise<{ ok: boolean, status: number, body?: string }> {
        try {
            // requisição à API
            const respostaAPI = await fetch(`${this.apiUri}${this.endpoint}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            });

            const bodyText = await respostaAPI.json();
            console.log('Status da resposta: ' + respostaAPI.status);
            console.log('Corpo da resposta: ' + bodyText);

            return {
                ok: true,
                status: respostaAPI.status,
                body: bodyText
            }

        } catch (error) {
            console.error('Erro ao fazer requisição à API. ' + error);
            return {
                ok: false,
                status: 0,
                body: String(error)
            };
        }
    }
}

export default new PersonRequests;