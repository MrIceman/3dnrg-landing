import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';
import { HorizontalDivider } from "../components/divider";
import Slider from 'react-slick'



const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },

];
const stats = [
    { id: 1, name: 'Digitale Zwillinge ertsellt ', value: '1500+' },
    { id: 2, name: 'PV-Anlagen geplant', value: '1200' },
    { id: 3, name: 'zufriedene Kunden', value: '100' },

]


const tiers = [
    {
        name: '3D-Modelle',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$19',
        description: "The perfect plan if you're just getting started with our product.",
        features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
        featured: false,
    },
    {
        name: 'PV-Planung',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$49',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            'Dedicated support representative',
            'Marketing automations',
            'Custom integrations',
        ],
        featured: true,
    },
];
function CarouselComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slidesData = [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&h=528&q=80",
        // Add more URLs as needed
        "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&auto=format&fit=crop&h=528&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80",
    ];

    return (
        <Slider {...settings}>
            {slidesData.map((url, index) => (
                <div key={index}>
                    <img src={url} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
                </div>
            ))}
        </Slider>
    );
}



function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <main>
                <div className="relative isolate">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0}
                              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"/>
                    </svg>
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        Steigern Sie die Effizienz und Genauigkeit Ihrer PV-Planung mit digitalen
                                        Zwillingen der Objekte.
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                        Treten Sie ein in eine Welt, in der 3D-Modelle den Weg für fortschrittliche
                                        Photovoltaik-Lösungen ebnen.
                                        Basierend auf Ihren Drohnenfotos erstellen wir 3-D Modelle für eine
                                        professionelle PV-Planung und stellen diese Ihnen als Planungsdatei (.obj- oder
                                        PV*sol-Datei) zur Verfügung.
                                        Sie profitieren von einer genaueren und schnelleren PV-Planung und sparen bis zu
                                        1 Stunde je Objekt.
                                        Zudem können Sie mit der fotorealistische Darstellung der PV-Anlagen auf den
                                        Dächern Ihrer Kunde vertrieblich punkten.
                                        Die Daten stellen wir Ihnen am nächsten Werktag über unsere Plattform zur
                                        Verfügung.
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a
                                            href="#"
                                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Get started
                                        </a>
                                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                            Live demo <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>

                                <div
                                    className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div
                                        className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HorizontalDivider/>
                <div className="container mx-auto my-32 flex flex-col items-center gap-16">
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-2 text-center">
                            <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl">
                                How 3DNRG works?
                            </h2>
                            <p className="text-base font-medium leading-7 text-gray-600">
                                Mit folgenden Schritten gelangen Sie unkompliziert zu Ihrer 3-D Planung.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
                        <div className="flex items-start gap-4">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                                <span className="text-base font-bold leading-7">1</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="mb-2 text-base font-bold leading-tight text-gray-900">
                                    Create your Account
                                </h3>
                                <p className="text-base font-medium leading-7 text-gray-600">
                                    Condimentum vit pellemsque habitant morbi at molestie.
                                </p>
                            </div>
                        </div>
                        <div className="rotate-90 lg:rotate-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42"
                                 fill="none">
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                                        fill="#68769F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="42" height="42" fill="white" transform="translate(0.666748)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex items-start gap-4">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid border-indigo-600 bg-transparent text-indigo-600">
                                <span className="text-base font-bold leading-7">2</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="mb-2 text-base font-bold leading-tight text-gray-900">
                                    Setup your Account
                                </h3>
                                <p className="text-base font-medium leading-7 text-gray-600">
                                    Nehmen Sie das Objekt bei Ihrem Kundentermin
                                    mit einer handelsüblichen Drohne auf. Eine
                                    Anleitung für den Flug finden Sie auf unserer
                                    Website.
                                </p>
                            </div>
                        </div>
                        <div className="rotate-90 lg:rotate-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42"
                                 fill="none">
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                                        fill="#68769F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="42" height="42" fill="white" transform="translate(0.666748)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex items-start gap-4">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid border-indigo-600 bg-transparent text-indigo-600">
                                <span className="text-base font-bold leading-7">3</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="mb-2 text-base font-bold leading-tight text-gray-900">
                                    Start creating with Horizon
                                </h3>
                                <p className="text-base font-medium leading-7 text-gray-600">
                                    Laden Sie Ihre Drohnenbilder (in der Regel ca. 50
                                    Bilder pro Projekt) auf unserer Plattform hoch.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-solid border-indigo-600 bg-transparent text-indigo-600">
                                <span className="text-base font-bold leading-7">4</span>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="mb-2 text-base font-bold leading-tight text-gray-900">
                                    Start creating with Horizon
                                </h3>
                                <p className="text-base font-medium leading-7 text-gray-600">
                                    Sie erhalten am folgenden Werktag eine .obj-Datei
                                    sowie eine PV*SOL-Datei mit integriertem 3DModell für Ihre Planung. Auf Anfrage
                                    übernehmen
                                    wir auch gerne die PV-Planung komplett für Sie.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                                <img className="h-12 self-start"
                                     src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt=""/>
                                <figure className="mt-10 flex flex-auto flex-col justify-between">
                                    <blockquote className="text-lg leading-8 text-gray-900">
                                        <p>
                                            “Alle Prozesse im PV-Bereich sind Dank der raschen
                                            und präzisen Planungsmöglichkeiten die uns
                                            3DNRGY bietet, schlanker und schneller. Die
                                            Entwicklung des Geschäftsbereiches hat durch die
                                            3D Modellierung alle Erwartungen übertroffen.
                                            ”
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-10 flex items-center gap-x-6">
                                        <img
                                            className="h-14 w-14 rounded-full bg-gray-50"
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </figcaption>
                                </figure>
                            </div>
                            <div
                                className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                                <img className="h-12 self-start"
                                     src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg" alt=""/>
                                <figure className="mt-10 flex flex-auto flex-col justify-between">
                                    <blockquote className="text-lg leading-8 text-gray-900">
                                        <p>
                                            “Dank der 3-D Modelle von 3DNRG sind unsere
                                            Planungskosten gesunken und die Genauigkeit
                                            gestiegen. Unsere Kunden sind von der
                                            Visualisierung Ihrer PV-Anlage begeistert.”
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-10 flex items-center gap-x-6">
                                        <img
                                            className="h-14 w-14 rounded-full bg-gray-50"
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <HorizontalDivider/>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Trusted by creators worldwide
                                </h2>
                                <p className="mt-4 text-lg leading-8 text-gray-600">
                                    Lorem ipsum dolor sit amet consect adipisicing possimus.
                                </p>
                            </div>
                            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                                {stats.map((stat) => (
                                    <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                                        <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <HorizontalDivider/>


                {/* Pricing Section */}
                <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
                         aria-hidden="true">
                        <div
                            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Flexible Preisgestaltung für Ihre Bedürfnisse

                        </p>
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                        Egal, ob Sie ein kleines Unternehmen, ein Großunternehmen oder irgendetwas dazwischen sind,
                        wir bieten Ihnen maßgeschneiderte Preisoptionen,
                        die auf Ihre individuellen Anforderungen zugeschnitten sind.
                    </p>
                    <div
                        className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                        {tiers.map((tier, tierIdx) => (
                            <div
                                key={tier.id}
                                className={classNames(
                                    tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                                    tier.featured
                                        ? ''
                                        : tierIdx === 0
                                            ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                                            : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                                    'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                                )}
                            >
                                <h3
                                    id={tier.id}
                                    className={classNames(
                                        tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                                        'text-base font-semibold leading-7'
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                      className={classNames(
                          tier.featured ? 'text-white' : 'text-gray-900',
                          'text-5xl font-bold tracking-tight'
                      )}
                  >
                    {tier.priceMonthly}
                  </span>
                                    <span
                                        className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
                                </p>
                                <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base leading-7')}>
                                    {tier.description}
                                </p>
                                <ul
                                    role="list"
                                    className={classNames(
                                        tier.featured ? 'text-gray-300' : 'text-gray-600',
                                        'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
                                    )}
                                >
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon
                                                className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={tier.href}
                                    aria-describedby={tier.id}
                                    className={classNames(
                                        tier.featured
                                            ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                                        'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                                    )}
                                >
                                    Get started today
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative bg-white">
                    <div className="lg:absolute lg:inset-0 lg:left-1/2">
                        <img
                            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                            alt=""
                        />
                    </div>
                    <HorizontalDivider/>
                    <div
                        className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                        <div className="px-6 lg:px-8">
                            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Lassen Sie uns gemeinsam
                                    arbeiten</h2>
                                <p className="mt-2 text-lg leading-8 text-gray-600">
                                    Arbeiten Sie mit uns zusammen, um Ihre Ziele zu erreichen.
                                    Wir sind darauf spezialisiert, maßgeschneiderte Lösungen zu liefern,
                                    die innovative Technologie mit fachmännischem Handwerk kombinieren.
                                    Gemeinsam können wir Visionen in die Realität umsetzen.
                                </p>
                                <form action="#" method="POST" className="mt-16">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                                First name
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="last-name"
                                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                                Last name
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="email"
                                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="company"
                                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                                Company
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="company"
                                                    id="company"
                                                    autoComplete="organization"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex justify-between text-sm leading-6">
                                                <label htmlFor="phone" className="block font-semibold text-gray-900">
                                                    Phone
                                                </label>
                                                <p id="phone-description" className="text-gray-400">
                                                    Optional
                                                </p>
                                            </div>
                                            <div className="mt-2.5">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    id="phone"
                                                    autoComplete="tel"
                                                    aria-describedby="phone-description"
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex justify-between text-sm leading-6">
                                                <label htmlFor="message"
                                                       className="block text-sm font-semibold leading-6 text-gray-900">
                                                    Wie können wir Ihnen helfen?
                                                </label>
                                                <p id="message-description" className="text-gray-400">
                                                    Max 500 characters
                                                </p>
                                            </div>
                                            <div className="mt-2.5">
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                                        <button
                                            type="submit"
                                            className="rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Send message
                                        </button>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
