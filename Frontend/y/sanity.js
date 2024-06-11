import { createClient } from "next-sanity";

export const client = createClient({
    projectId:"kb5kpnr6",
    dataset:"production",
    useCdn:true,
    apiVersion:"2024-06-11",
    token:"skK02qagrxrvs9QKNdPliWrDQmvrz2f8BScUaeCP67n9BHxtY3UmRxS3OUheIvT2Y0CMVMCOaphqZmzOElAzwb1iPdqsdqDn1YGGEoInrTnKYUKmVDkXC1wj7y4wHFGdh62cUn9a95RSyY8afKP9ou0QSIlyre6JAIUcc1XiCqW1tWzjIqHd"
})