import React from "react";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";

function DetailsPage() {
  const handleClose = (e: any) => {
    setTimeout(() => {
      router.push("/Listing");
    });
  };
  const router = useRouter();
  const {
    birthLocation,
    name,
    child_name,
    other_name,
    age,
    birth_date,
    birth_location,
    religion,
    nation,
    nrc,
    height,
    weight,
    hair_color,
    eyes_color,
    prominent_sign,
    department,
    service_age,
    current_address,
    permanent_address,
    education,
    degree,
    specialization,
    degree_year_received,
    grade,
    first_degree,
    graduate_degree,
    school_attended,
    from_years,
    finished_years,
    type_of_school,
    school_location,
    school_level,
    from_year_abroad,
    finished_year_abroad,
    countries_visited,
    matter_of_visiting,
    deposit_exchange,
    father_relative_name,
    father_relativeness,
    father_relativeness_gender,
    father_relativeness_citizen,
    father_relativeness_job,
    father_relativeness_location,
    father_relativeness_note,
    mother_relative_name,
    mother_relativeness,
    mother_relativeness_gender,
    mother_relativeness_citizen,
    mother_relativeness_job,
    mother_relativeness_location,
    mother_relativeness_note,
    oversea_name,
    oversea_relative_name,
    oversea_relativeness,
    oversea_relativeness_gender,
    oversea_relativeness_citizen,
    oversea_relativeness_job,
    oversea_relativeness_location,
    oversea_relativeness_note,
    love_name,
    love_relative_name,
    love_relativeness,
    love_relativeness_gender,
    love_relativeness_citizen,
    love_relativeness_job,
    love_relativeness_location,
    love_relativeness_note,
    love_father_name,
    love_father_relative_name,
    love_father_relativeness,
    love_father_relativeness_gender,
    love_father_relativeness_citizen,
    love_father_relativeness_job,
    love_father_relativeness_location,
    love_father_relativeness_note,
    love_mother_name,
    love_mother_relative_name,
    love_mother_relativeness,
    love_mother_relativeness_gender,
    love_mother_relativeness_citizen,
    love_mother_relativeness_job,
    love_mother_relativeness_location,
    love_mother_relativeness_note,
    child_name_t,
    child_relative_name_n,
    child_relativeness,
    child_relativeness_gender,
    child_relativeness_citizen,
    child_relativeness_job,
    child_relativeness_location,
    child_relativeness_note,
    oversea_relative_name_n,
    oversea_relative_relativeness,
    oversea_relative_nation,
    oversea_relative_job,
    oversea_relative_current_country,
    oversea_relative_matter,
    oversea_relative_return,
    dept_action_taken,
    dept_action_taken_fact,

    dept_punishment,
    dept_action_taken_note,
    court_time,
    court_fact,
    court_action,
    court_note,
    degree_give_year,
    what_type_degree,
    degree_give_note,
    go_abroad,
    reason_go_abroad,
    abroad_country,
    time_abroad,
    arrive_time_abroad,
    what_gov_abroad,
    dept_when_arr_from_abroad,
    need_to_go_abroad,
    credentials_for_abroad,
    submit_person_date,
    submit_person_ticket,
    submit_person_name,
    submit_person_position,
    submit_person_dept,
    stuff_behavior,
    date,
    submit_person1_ticket,
    submit_person1_name,
    submit_person1_position,
    submit_person1_dept,
    headmaster_ticket,
    headmaster_name,
    headmaster_position,
    headmaster_dept,
    headmaster_date,
    school_headmaster_ticket,
    school_headmaster_name,
    school_headmaster_position,
    school_headmaster_dept,
    school_headmaster_dept_date,
  } = router.query;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleClose}
        className="

p3
border-0
hover:opacity-70
transition
absolute
left-14
bg-pink-500

top-5
"
      >
        <IoMdClose size={30} />{" "}
      </button>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl text-center font-bold mb-4 text-blue-600">
          ကိုယ်ရေးမှတ်တမ်း (၃၆)ချက်
        </h1>
        <br />
        <br />
        <table className=" w-full">
          <tbody>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">၁။ အမည်</td>
              <td className="text-gray-800 py-2">{name}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂။ ငယ်နာမည်
              </td>
              <td className="text-gray-800 py-2">{child_name}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၃။ အခြားအမည်များ (ရှိလျှင်)
              </td>
              <td className="text-gray-800 py-2">{other_name}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၄။ အသက် (မွေးနေ့သက္ကရာဇ်)
              </td>
              <td className="text-gray-800 py-2">{age}</td>
            </tr>
            {/* Add more rows for other details */}
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၅။ မွေးရာဇာတိ
              </td>
              <td className="text-gray-800 py-2">{birth_location}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၆။ ကိုးကွယ်သည့်ဘာသာ
              </td>
              <td className="text-gray-800 py-2">{religion}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၇။ လူမျိုး (ကပြားဖြစ်လျှင် မည်သည့်ကပြားဖြစ်ကြာင်းနှင့်
                <br /> ရှမ်း၊ ချင်း စသည့် လူမျိုးစုဖြစ်လျှင် လိုအပ်သလို
                ဖော်ပြရန် )။
              </td>
              <td className="text-gray-800 py-2">{nation}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၈။ အမျိုးသားမှတ်ပုံတင်အမှတ်
              </td>
              <td className="text-gray-800 py-2">{nrc}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">၉။ အရပ်</td>
              <td className="text-gray-800 py-2">{height}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၀။ ကိုယ်အလေးချိန်
              </td>
              <td className="text-gray-800 py-2">{weight}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၁။ ဆံပင်အရောင်
              </td>
              <td className="text-gray-800 py-2">{hair_color}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၂။ မျက်စိအရောင်
              </td>
              <td className="text-gray-800 py-2">{eyes_color}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၃။ ထင်ရှားသည့်အမှတ်အသား
              </td>
              <td className="text-gray-800 py-2">{prominent_sign}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၄။ အလုပ်အကိုင်နှင့်ဌာန
              </td>
              <td className="text-gray-800 py-2">{department}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၅။ အမှုထမ်းသက်(ဝင်ရောက်သည့်နေ့စွဲ)
              </td>
              <td className="text-gray-800 py-2">{service_age}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၆။ လက်ရှိနေရပ်လိပ်စာအပြည့်အစုံ
              </td>
              <td className="text-gray-800 py-2">{current_address}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၇။ အမြဲတမ်းနေရပ်လိပ်စာ အပြည့်အစုံ
              </td>
              <td className="text-gray-800 py-2">{permanent_address}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၈။ ပညာအရည်အချင်း
              </td>
              <td className="text-gray-800 py-2">{education}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ဘွဲ့အမည်
              </td>
              <td className="text-gray-800 py-2">{degree}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အထူးပြုဘာသာ
              </td>
              <td className="text-gray-800 py-2">{specialization}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ရရှိသည့်ခုနှစ်
              </td>
              <td className="text-gray-800 py-2">{degree_year_received}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ရရှိသည့်အဆင့်
              </td>
              <td className="text-gray-800 py-2">{grade}</td>
            </tr>
            {/*  <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-gray-600 pr-4 py-2 font-semibold border">
                    Label
                  </th>
                  <th className="text-gray-800 py-2 border">Value</th>
                  <th className="text-gray-800 py-2 border">Value</th>
                  <th className="text-gray-800 py-2 border">Value</th>
                  <th className="text-gray-800 py-2 border">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 border">
                  <td className="text-gray-600 pr-4 py-2 font-semibold border">
                    ဘွဲ့အမည်
                  </td>
                  <td className="text-gray-800 py-2 border">{degree}</td>
                  <td className="text-gray-800 py-2 border">
                    {specialization}
                  </td>
                  <td className="text-gray-800 py-2 border">
                    {degree_year_received}
                  </td>
                  <td className="text-gray-800 py-2 border">{grade}</td>
                </tr>
                <tr className="bg-gray-100 border">
                  <td className="text-gray-600 pr-4 py-2 font-semibold border">
                    အထူးပြုဘာသာ
                  </td>
                  <td className="text-gray-800 py-2 border">{degree}</td>
                  <td className="text-gray-800 py-2 border">
                    {specialization}
                  </td>
                  <td className="text-gray-800 py-2 border">
                    {degree_year_received}
                  </td>
                  <td className="text-gray-800 py-2 border">{grade}</td>
                </tr>
                <tr className="bg-gray-100 border">
                  <td className="text-gray-600 pr-4 py-2 font-semibold border">
                    ရရှိသည့်ခုနှစ်
                  </td>
                  <td className="text-gray-800 py-2 border">
                    {degree_year_received}
                  </td>
                  <td className="text-gray-800 py-2 border">
                    {degree_year_received}
                  </td>
                  <td className="text-gray-800 py-2 border">
                    {degree_year_received}
                  </td>
                  <td className="text-gray-800 py-2 border">
                    {degree_year_received}
                  </td>
                </tr>
                <tr className="bg-gray-100 border">
                  <td className="text-gray-600 pr-4 py-2 font-semibold border">
                    ရရှိသည့်အဆင့်
                  </td>
                  <td className="text-gray-800 py-2 border">{grade}</td>
                  <td className="text-gray-800 py-2 border">{grade}</td>
                  <td className="text-gray-800 py-2 border">{grade}</td>
                  <td className="text-gray-800 py-2 border">{grade}</td>
                </tr>
                {/* Add more rows as needed */}
            {/*  </tbody>
            </table> */}{" "}
            {/*  */}
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                (က) ပထမဘွဲ့
              </td>
              <td className="text-gray-800 py-2">{first_degree}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                (ခ)ဘွဲ့လွန်ဘွဲ့
              </td>
              <td className="text-gray-800 py-2">{graduate_degree}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၁၉။ ပညာဆည်းပူးခဲ့သော၊ သင်တန်းတက်ခဲ့သော
                <br />
                ကျောင်း၊ကောလိပ်၊တက္ကသိုလ်၊အလုပ်ငှာန ၊သင်တန်းများစသည်များ။
              </td>
              <td className="text-gray-800 py-2">{school_attended}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">မှ</td>
              <td className="text-gray-800 py-2">{from_years}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ထိ</td>
              <td className="text-gray-800 py-2">{finished_years}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ကျောင်း၊တက္ကသိုလ်၊ အလုပ်ဌာန၊ သင်တန်း
              </td>
              <td className="text-gray-800 py-2">{type_of_school}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                တည်ရာအရပ်
              </td>
              <td className="text-gray-800 py-2">{school_location}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အဆင့်အတန်း
              </td>
              <td className="text-gray-800 py-2">{school_level}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၀။ နိုင်ငံခြားသို့ ရောက်ဘူးခြင်း ရှိ-မရှိ ။
              </td>
              <td className="text-gray-800 py-2">{birthLocation}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ကာလမှ</td>
              <td className="text-gray-800 py-2">{from_year_abroad}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ကာလထိ</td>
              <td className="text-gray-800 py-2">{finished_year_abroad}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                သွားရောက်သည့်နိုင်ငံများ
              </td>
              <td className="text-gray-800 py-2">{countries_visited}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                သွားရောက်သည့်ကိစ္စ
              </td>
              <td className="text-gray-800 py-2">{matter_of_visiting}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                နိုင်ငံခြားငွေမည်မျှ ထုတ်ယူခဲ့သည်
              </td>
              <td className="text-gray-800 py-2">{deposit_exchange}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၁။ ဝန်ထမ်း၏အဘနှင့် အဘ၏ မောင်နှမအရင်းအချာများ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အမည်(အခြားအမည်များရှိလျှင် ဖော်ပြရန်)
              </td>
              <td className="text-gray-800 py-2">{father_relative_name}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                တော်စပ်ပုံ
              </td>
              <td className="text-gray-800 py-2">{father_relativeness}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ကျား၊မ</td>
              <td className="text-gray-800 py-2">
                {father_relativeness_gender}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မည်သည့်နိုင်ငံသား
              </td>
              <td className="text-gray-800 py-2">
                {father_relativeness_citizen}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                *အလုပ်အကိုင်
              </td>
              <td className="text-gray-800 py-2">{father_relativeness_job}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">နေရပ်</td>
              <td className="text-gray-800 py-2">
                {father_relativeness_location}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                **မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">{father_relativeness_note}</td>
            </tr>
            {/*  */}
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၂။ ဝန်ထမ်း၏အမိနှင့် အမိ၏မောင်နှမ အရင်းအချာများ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အမည်(အခြားအမည်များရှိလျှင် ဖော်ပြရန်)
              </td>
              <td className="text-gray-800 py-2">{mother_relative_name}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                တော်စပ်ပုံ
              </td>
              <td className="text-gray-800 py-2">{mother_relativeness}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ကျား၊မ</td>
              <td className="text-gray-800 py-2">
                {mother_relativeness_gender}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မည်သည့်နိုင်ငံသား
              </td>
              <td className="text-gray-800 py-2">
                {mother_relativeness_citizen}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                *အလုပ်အကိုင်
              </td>
              <td className="text-gray-800 py-2">{mother_relativeness_job}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">နေရပ်</td>
              <td className="text-gray-800 py-2">
                {mother_relativeness_location}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                **မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">{mother_relativeness_note}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၃။ နိုင်ငံခြားသွားမည့် သူ၏မောင်နှမ အရင်းအချာများ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အမည်(အခြားအမည်များရှိလျှင် ဖော်ပြရန်)
              </td>
              <td className="text-gray-800 py-2">{oversea_relative_name}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                တော်စပ်ပုံ
              </td>
              <td className="text-gray-800 py-2">{oversea_relativeness}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ကျား၊မ</td>
              <td className="text-gray-800 py-2">
                {oversea_relativeness_gender}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မည်သည့်နိုင်ငံသား
              </td>
              <td className="text-gray-800 py-2">
                {oversea_relativeness_citizen}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                *အလုပ်အကိုင်
              </td>
              <td className="text-gray-800 py-2">{oversea_relativeness_job}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">နေရပ်</td>
              <td className="text-gray-800 py-2">
                {oversea_relativeness_location}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                **မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">
                {oversea_relativeness_note}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၄ ။ဇနီး၊ခင်ပွန်းနှင့် ၎င်း၏မောင် နှမအရင်းအချာများ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အမည်(အခြားအမည်များရှိလျှင် ဖော်ပြရန်)
              </td>
              <td className="text-gray-800 py-2">{love_relative_name}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                တော်စပ်ပုံ
              </td>
              <td className="text-gray-800 py-2">{love_relativeness}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ကျား၊မ</td>
              <td className="text-gray-800 py-2">{love_relativeness_gender}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မည်သည့်နိုင်ငံသား
              </td>
              <td className="text-gray-800 py-2">
                {love_relativeness_citizen}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                *အလုပ်အကိုင်
              </td>
              <td className="text-gray-800 py-2">{love_relativeness_job}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">နေရပ်</td>
              <td className="text-gray-800 py-2">
                {love_relativeness_location}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                **မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">{love_relativeness_note}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၅။ ဇနီး၊ခင်ပွန်း၏အဘနှင့် မောင်နှမအရင်းအချာများ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အမည်(အခြားအမည်များရှိလျှင် ဖော်ပြရန်)
              </td>
              <td className="text-gray-800 py-2">
                {love_father_relative_name}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                တော်စပ်ပုံ
              </td>
              <td className="text-gray-800 py-2">{love_father_relativeness}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ကျား၊မ</td>
              <td className="text-gray-800 py-2">
                {love_father_relativeness_gender}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မည်သည့်နိုင်ငံသား
              </td>
              <td className="text-gray-800 py-2">
                {love_father_relativeness_citizen}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                *အလုပ်အကိုင်
              </td>
              <td className="text-gray-800 py-2">
                {love_father_relativeness_job}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">နေရပ်</td>
              <td className="text-gray-800 py-2">
                {love_father_relativeness_location}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                **မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">
                {love_father_relativeness_note}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၆။ ဇနီး၊ခင်ပွန်း၏အမိနှင့် မောင်နှမအရင်းအချာများ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အမည်(အခြားအမည်များရှိလျှင် ဖော်ပြရန်)
              </td>
              <td className="text-gray-800 py-2">
                {love_mother_relative_name}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                တော်စပ်ပုံ
              </td>
              <td className="text-gray-800 py-2">{love_mother_relativeness}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ကျား၊မ</td>
              <td className="text-gray-800 py-2">
                {love_mother_relativeness_gender}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မည်သည့်နိုင်ငံသား
              </td>
              <td className="text-gray-800 py-2">
                {love_mother_relativeness_citizen}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                *အလုပ်အကိုင်
              </td>
              <td className="text-gray-800 py-2">
                {love_mother_relativeness_job}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">နေရပ်</td>
              <td className="text-gray-800 py-2">
                {love_mother_relativeness_location}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                **မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">
                {love_mother_relativeness_note}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၇။ သား သမီးများနှင့် ၎င်းတို့၏ ဇနီး၊ခင်ပွန်း။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အမည်(အခြားအမည်များရှိလျှင် ဖော်ပြရန်)
              </td>
              <td className="text-gray-800 py-2">{child_relative_name_n}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                တော်စပ်ပုံ
              </td>
              <td className="text-gray-800 py-2">{child_relativeness}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ကျား၊မ</td>
              <td className="text-gray-800 py-2">
                {child_relativeness_gender}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မည်သည့်နိုင်ငံသား
              </td>
              <td className="text-gray-800 py-2">
                {child_relativeness_citizen}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                *အလုပ်အကိုင်
              </td>
              <td className="text-gray-800 py-2">{child_relativeness_job}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">နေရပ်</td>
              <td className="text-gray-800 py-2">
                {child_relativeness_location}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                **မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">{child_relativeness_note}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၈။ နိုင်ငံခြားတွင်ရာက်ရှိနေကြသည့် ဆွေမျိုးများ။**
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အမည်(အခြားအမည်များရှိလျှင် ဖော်ပြရန်)
              </td>
              <td className="text-gray-800 py-2">{oversea_relative_name_n}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                တော်စပ်ပုံ
              </td>
              <td className="text-gray-800 py-2">
                {oversea_relative_relativeness}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မည်သည့်နိုင်ငံသား
              </td>
              <td className="text-gray-800 py-2">{oversea_relative_nation}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အလုပ်အကိုင်
              </td>
              <td className="text-gray-800 py-2">{oversea_relative_job}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ရောက်ရှိနေသည့်နိုင်ငံ
              </td>
              <td className="text-gray-800 py-2">
                {oversea_relative_current_country}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                {" "}
                သွားရာက်သည့်ကိစ္စ
              </td>
              <td className="text-gray-800 py-2">{oversea_relative_matter}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ပြန်လည်ရောက်ရှိမယ့် ကာလ
              </td>
              <td className="text-gray-800 py-2">{oversea_relative_return}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၂၉။ ဌာန ဆိုင်ရာ အရေးယူခံရခြင်း ရှိ-မရှိ ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                {" "}
                အရေးယူခံရသည့် ကာလ
              </td>
              <td className="text-gray-800 py-2">{dept_action_taken}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အရေးယူခံရသည့် အကြောင်းကိစ္စ
              </td>
              <td className="text-gray-800 py-2">{dept_action_taken_fact}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ချမှတ်ခံရသည့်ပြစ်ဒဏ်
              </td>
              <td className="text-gray-800 py-2">{dept_punishment}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">{dept_action_taken_note}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၃၀။ တရားရုံးတွင် တရားစွဲ ခံရဖူးခြင်း ရှိ-မရှိ ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                {" "}
                အရေးယူခံရသည့် ကာလ
              </td>
              <td className="text-gray-800 py-2">{court_time}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အရေးယူခံရသည့် အကြောင်းကိစ္စ
              </td>
              <td className="text-gray-800 py-2">{court_fact}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ချမှတ်ခံရသည့်ပြစ်ဒဏ်
              </td>
              <td className="text-gray-800 py-2">{court_action}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">{court_note}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၃၁။ ဘွဲ့၊တံဆိပ် ချီးမြှင့်ခံရခြင်းရှိ-မရှိ ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ချီးမြှင့်ခံရသည့်ကာလ
              </td>
              <td className="text-gray-800 py-2">{degree_give_year}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ချီးမြှင့်ခံရသည့် ဘွဲ့၊တံဆိပ်အမျိုးအစား
              </td>
              <td className="text-gray-800 py-2">{what_type_degree}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မှတ်ချက်
              </td>
              <td className="text-gray-800 py-2">{degree_give_note}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ၃၂။ နိုင်ငံခြားသို့ သွားရောက်မည့် ကိစ္စ။
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                သင်ကြားမည့် ဘာသာရပ်နှင့် အဆင့်၊ တက်ရောက်မည့် သင်တန်း၊
                <br /> သို့မဟုတ် အခြားကိစ္စ
              </td>
              <td className="text-gray-800 py-2">{reason_go_abroad}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                စေလွှတ်သည့်နိုင်ငံ
              </td>
              <td className="text-gray-800 py-2">{abroad_country}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                အချိန်ကာလ
              </td>
              <td className="text-gray-800 py-2">{time_abroad}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                နိုင်ငံခြားသို့ရောက်ရမည့်နေ့
              </td>
              <td className="text-gray-800 py-2">{arrive_time_abroad}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                မည်သည့် အစိုးရအဖွဲ့အစည်းအထောက်အပံ့
              </td>
              <td className="text-gray-800 py-2">{what_gov_abroad}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                ပြန်လည်ရောက်ရှိလျှင် အမှု ထမ်းမည့် ဌာန၊တာဝန်
              </td>
              <td className="text-gray-800 py-2">
                {dept_when_arr_from_abroad}
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                သွား ရောက်မည့် နိုင်ငံ
              </td>
              <td className="text-gray-800 py-2">{need_to_go_abroad}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                နိုင်ငံခြားသို့သွားရာက်မည့် ကိစ္စနှင့်အထောက်အထားများ
              </td>
              <td className="text-gray-800 py-2">{credentials_for_abroad}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                <br />
                ၃၃။ အထက်ပါ အချက်အလက်များကို မှန်ကန်စွာ ဖြည့်သွင်း ရေးသားထားပါ
                ကြောင်း ကိုယ်တိုင် လက်မှတ် ရေးထိုးပါသည်။
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold ">ရက်စွဲ</td>
              <td className="text-gray-800 py-2">{submit_person_date}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">
                လျှောက်ထားသူလက်မှတ်
              </td>
              <td className="text-gray-800 py-2">{submit_person_ticket}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">အမည်</td>
              <td className="text-gray-800 py-2">{submit_person_name}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ရာထူး</td>
              <td className="text-gray-800 py-2">{submit_person_position}</td>
            </tr>
            <tr>
              <td className="text-gray-600 pr-4 py-2 font-semibold">ဌာန</td>
              <td className="text-gray-800 py-2">{submit_person_dept}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailsPage;
