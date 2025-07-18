import React from "react";
import ReviewC from "../ReviewC/ReviewC";
// import lst from "../../assets/last_img.jpg"
// import ReviewC from "../../assets/ng.png";
const Gellary = () => {
  return (
    // <div id="gallary" className="h-full py-10">
    //     <div className="pb-5 text-center text-5xl md:text-7xl poppins-bold text-shadow-lg text-[#7F22FE]">
    //     OUR Gellary
    //   </div>
    //   <div className="w-full flex justify-center">
    //     <div className="text-center max-w-xl text-base md:text-lg text-gray-800 px-4 md:px-0">
    //       Here some happy moments of our clients.
    //     </div>
    //   </div>
    //   <hr className="my-6 border-[#7F22FE] w-[90%] mx-auto" />
    //   <section className="py-6 bg-gray-100 text-gray-900">
    //     <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
    //       <img
    //       data-aos="fade-left"
    //         src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/481072506_122231387474027349_7138654650543657114_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=e7XSJTn26agQ7kNvwHVQtjW&_nc_oc=Adn-g7Wj4y38izxLW7e8fK3ASCJSulJox3QtKFNZcYMV3o9-t0TKVKcVDfGScSYgWFI&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=vux97ZgZ5UANntlChmnBoQ&oh=00_AfPwpCwde9VsqgFafj6zjbriEyEyzny4Yfc_kO_1QNHv2w&oe=68672071"
    //         alt=""
    //         className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //       />
    //       <img
    //       data-aos="fade-right"
    //         alt=""
    //         className="w-full h-full rounded shadow-sm min-h-48 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //         src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/490143310_122240926454027349_6569533132503493106_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YfxlMUogP0cQ7kNvwEHp8cV&_nc_oc=Adk4ZmzLZwcQ6Mp8UHH_FF_5r7HnCUbM6AMqcI1WwuEVk1LXtcQYztAqSUTV6EIlOIs&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=RxLl68JTjQ-OfQPnmH2eCg&oh=00_AfPzIkepWHdTfWn8DXNsV2m2rO99R-a4uDi8YQozirSjxQ&oe=6866F7D8"
    //       />
    //       <img
    //         alt=""
    //         data-aos="fade-left"
    //         className="w-full h-full rounded shadow-sm min-h-48 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //         src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/487502457_122239168058027349_1231493042154125914_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UPjm15_EmqYQ7kNvwFVtFa-&_nc_oc=AdkaB1jUlOLSWQs9L2C64XyPDPKwe8za0xx75PceWSVgjsEbVDNvB568IDV6Pw0KIGU&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=C2IDzjSI-DFixzggD_PxTg&oh=00_AfMtYSj7qkdnqvba04VVFf4MFhq2q9ijCTbKeOrc_y2V7Q&oe=68670257"
    //       />
    //       <img
    //         alt=""
    //         data-aos="fade-right"
    //         className="w-full h-full rounded shadow-sm min-h-48 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //         src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/487325246_122238314948027349_1085790391953067000_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Nb_aq-0Wl7MQ7kNvwHYDALB&_nc_oc=AdkqBNKFo0JwnN_7AxGLtPy6Ive0uU5LZBj_pdk0HpSqtoApAoAroCPtM0s-61st56I&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=AKV0aKWHOKjGszeOsaZCdA&oh=00_AfNfD5mdSLyf29-lIzkJsx7wl-zlA_23kkq4QHI4zziZUg&oe=6867032E"
    //       />
    //       <img
    //         alt=""
    //         data-aos="fade-left"
    //         className="w-full h-full rounded shadow-sm min-h-48 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //         src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/480961446_122237217260027349_6557429362628901297_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=l2KKCY6Yi98Q7kNvwFN2rrS&_nc_oc=AdmYCF9cm_vXXTeD20gchkpm0QatmbjSyf6oBHmB_4io3WyhM6lOdK7uUoBFix6mlp0&_nc_zt=23&_nc_ht=scontent.fzyl2-1.fna&_nc_gid=iQ18NZBc6fFywSwxbDCq0g&oh=00_AfO0cNPXMGndxM8zNwVm30OsPFEkQfA8Br_pgPUpWQLqXw&oe=6866FC8E"
    //       />
    //       <img
    //         alt=""
    //         data-aos="fade-right"
    //         className="w-full h-full rounded shadow-sm min-h-48 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //         src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/480061176_122235298808027349_6139957939160017396_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AmJQYUwGv0MQ7kNvwEzDsLn&_nc_oc=Admo-nJplj-5r-bcZLeUpMXkDzXzDh5ucqeZj089kycfjsAxA8uzbT0P_qDRdZCVi4s&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=qFqICpRVcMKDy920JVKzyA&oh=00_AfMbyumY3Xg8MoHKRnBnrCOk3vTnd2vmqLNkCgGCXngtfQ&oe=68671AD3"
    //       />
    //       <img
    //         alt=""
    //         data-aos="fade-left"
    //         className="w-full h-full rounded shadow-sm min-h-48 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //         src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/476655884_122235403880027349_8970062673849980085_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=d5bpCg06kO0Q7kNvwGfVZBc&_nc_oc=Adk1Br89t82QJ6acYJ-eiWWBaxY2CezkE4n6yCfEp0GH0KmjNXFNAeVN2LF9qlgfHjk&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=1aZL1iA7TNdb3Etp4t3paQ&oh=00_AfMHhD1VOmDmfyaxot5LSSfPoKs863-pk7Uz26hjBzc6GA&oe=6866EFF8"
    //       />
    //       <img
    //         alt=""
    //         data-aos="fade-right"
    //         className="w-full h-full rounded shadow-sm min-h-48 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //         src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/480744732_122231064428027349_80336127194290441_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Z8Kz97qi4UIQ7kNvwGyCMhv&_nc_oc=Adm6WqrchMlSLKqpcOoyIFRmd4DiIHnaXKPhUZYBLOkHZhZ3W5TWxm-CDulFi3UquxE&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=fkrFBd0AFSGq3LoLR5S-hQ&oh=00_AfP2mfGYzFiiaLPLN27dxl35sYBVjh1cw1Y5x8pf91uNOw&oe=68671098"
    //       />
    //       <img
    //         alt=""
    //         data-aos="fade-left"
    //         className="w-full h-full rounded shadow-sm min-h-48 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //         src="https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/475961138_122228171666027349_504907538223317731_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TfUvqgDN3MkQ7kNvwEwPZH6&_nc_oc=AdnAKLi9b4KgNFJWODyfgGTadKt5GEX7x4kRvnG0WfoNADzi9oygGNea5Z7fHcj2OjQ&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=c3WhDPxLZ_aaEUxWxBMJTA&oh=00_AfPwGiLTGTsLqPRvK4Kp6P9QzEda5FIpEmDyo3K5dcKjjg&oe=68670DB6"
    //       />
    //       <img
    //       data-aos="fade-right"
    //        src={lst}
    //         alt=""
    //         className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 https://wa.me/+8801993726235?text=Hello%2C%20I%20saw%20your%20website%20can%20i%20know%20about%20your%20services?:bg-gray-500 aspect-square"
    //       />
    //     </div>
    //   </section>
    // </div>
    <ReviewC></ReviewC>
  );
};

export default Gellary;
