import React, { useRef, useState } from "react";
import Axios from "axios";
import { toast } from "react-hot-toast";

const PersonalDataForm = () => {
  const [name, setName] = useState("");

  const [child_name, setChildName] = useState("");

  const [other_name, setOtherName] = useState("");
  const [age, setAge] = useState("");
  const [birth_date, setBirthDate] = useState("");

  const [birth_location, setBirthLocation] = useState("");

  const [religion, setReligion] = useState("");

  const [nation, setNation] = useState("");

  const [nrc, setNrc] = useState("");

  const [height, setHeight] = useState("");

  const [weight, setWeight] = useState("");

  const [hair_color, setHairColor] = useState("");

  const [eyes_color, setEyesColor] = useState("");

  const [prominent_sign, setProminentSign] = useState("");

  const [department, setDepartment] = useState("");

  const [service_age, setServiceAge] = useState("");

  const [current_address, setCurrentAddress] = useState("");

  const [permanent_address, setPermanentAddress] = useState("");

  const [education, setEducation] = useState("");

  const [degree, setDegree] = useState("");

  const [specialization, setSpecialization] = useState("");

  const [degree_year_received, setDegreeYearReceived] = useState("");

  const [grade, setGrade] = useState("");

  const [first_degree, setFirstDegree] = useState("");

  const [graduate_degree, setGraduateDegree] = useState("");

  const [school_attended, setSchoolAttended] = useState("");

  const [from_years, setFromYears] = useState("");

  const [finished_years, setFinishedYears] = useState("");
  const [school_location, setSchoolLocation] = useState("");

  const [school_level, setSchoolLevel] = useState("");

  const [from_year_abroad, setFromYearAbroad] = useState("");

  const [finished_year_abroad, setFinishedYearAbroad] = useState("");

  const [countries_visited, setCountriesVisited] = useState("");

  const [matter_of_visiting, setMatterOfVisiting] = useState("");

  const [deposit_exchange, setDepositExchange] = useState("");

  const [father_name, setFatherName] = useState("");

  const [father_relative_name, setFatherRelativeName] = useState("");

  const [father_relativeness, setFatherRelativeness] = useState("");

  const [father_relativeness_gender, setFatherRelativenessGender] =
    useState("");
  const [father_relativeness_citizen, setFatherRelativenessCitizen] =
    useState("");
  const [father_relativeness_job, setFatherRelativenessJob] = useState("");
  const [father_relativeness_location, setFatherRelativnessLocation] =
    useState("");
  const [father_relativeness_note, setFatherRelativenessNote] = useState("");

  const [mother_name, setMotherName] = useState("");
  const [mother_relative_name, setMotherRelativeName] = useState("");
  const [mother_relativeness, setMotherRelativeness] = useState("");
  const [mother_relativeness_gender, setMotherRelativenessGender] =
    useState("");
  const [mother_relativeness_citizen, setMotherRelativenessCitizen] =
    useState("");
  const [mother_relativeness_job, setMotherRelativenessJob] = useState("");

  const [mother_relativeness_location, setMotherRelativenessLocation] =
    useState("");
  const [mother_relativeness_note, setMotherRelativenessNote] = useState("");
  const [oversea_name, setOverseaName] = useState("");
  const [oversea_relative_name, setOverseaRelativeName] = useState("");

  const [oversea_relativeness, setOverseaRelativeness] = useState("");
  const [oversea_relativeness_gender, setOverseaRelativenessGender] =
    useState("");

  const [oversea_relativeness_citizen, setOverseaRelativenessCitizen] =
    useState("");
  const [oversea_relativeness_job, setOverseaRelativenessJob] = useState("");
  const [oversea_relativeness_location, setOverseaRelativenessLocation] =
    useState("");

  const [oversea_relativeness_note, setOverseaRelativenessNote] = useState("");
  const [love_name, setLoveName] = useState("");
  const [love_relative_name, setLoveRelativeName] = useState("");
  const [love_relativeness, setLoveRelativeness] = useState("");
  const [love_relativeness_gender, setLoveRelativenessGender] = useState("");
  const [love_relativeness_citizen, setLoveRelativenessCitizen] = useState("");

  const [love_relativeness_job, setLoveRelativenessJob] = useState("");

  const [love_relativeness_location, setLoveRelativenessLocation] =
    useState("");
  const [love_relativeness_note, setLoveRelativenessNote] = useState("");
  const [love_father_name, setLoveFatherName] = useState("");

  const [love_father_relative_name, setLoveFatherRelativeName] = useState("");
  const [love_father_relativeness, setLoveFatherRelativeness] = useState("");
  const [love_father_relativeness_gender, setLoveFatherRelativenessGender] =
    useState("");
  const [love_father_relativeness_citizen, setLoveFatherRelativenessCitizen] =
    useState("");

  const [love_father_relativeness_job, setLfrj] = useState("");
  const [love_father_relativeness_location, setLfrl] = useState("");
  const [love_father_relativeness_note, setLfrn] = useState("");
  const [love_mother_name, setLmn] = useState("");
  const [love_mother_relative_name, setLmrn] = useState("");

  const [love_mother_relativeness, setLmr] = useState("");
  const [love_mother_relativeness_gender, setLmrg] = useState("");
  const [love_mother_relativeness_citizen, setLmrc] = useState("");
  const [love_mother_relativeness_job, setLmrj] = useState("");
  const [love_mother_relativeness_location, setLmrl] = useState("");
  const [love_mother_relativeness_note, setLmrnote] = useState("");
  const [child_name_t, setCnt] = useState("");

  const [child_relative_name_n, setCrnn] = useState("");
  const [child_relativeness, setCr] = useState("");
  const [child_relativeness_gender, setCrg] = useState("");
  const [child_relativeness_citizen, setCrc] = useState("");

  const [child_relativeness_job, setCrj] = useState("");

  const [child_relativeness_location, setCrl] = useState("");
  const [child_relativeness_note, setCrn] = useState("");
  const [oversea_relative_name_n, setOrnn] = useState("");
  const [oversea_relative_relativeness, setOrr] = useState("");

  const [oversea_relative_nation, setOrn] = useState("");

  const [oversea_relative_job, setOrj] = useState("");

  const [oversea_relative_current_country, setOrcc] = useState("");

  const [oversea_relative_matter, setOrm] = useState("");

  const [oversea_relative_return, setOrre] = useState("");

  const [dept_action_taken, setDat] = useState("");

  const [dept_action_taken_fact, setDatf] = useState("");

  const [dept_punishment, setDp] = useState("");

  const [dept_action_taken_note, setDatn] = useState("");

  const [court_time, setCt] = useState("");

  const [court_fact, setCf] = useState("");
  const [court_action, setCa] = useState("");

  const [court_note, setCn] = useState("");

  const [degree_give_year, setDgy] = useState("");

  const [what_type_degree, setWtd] = useState("");
  const [degree_give_note, setDgn] = useState("");

  const [go_abroad, setGa] = useState("");
  const [reason_go_abroad, setRga] = useState("");
  const [abroad_country, setAc] = useState("");

  const [arrive_time_abroad, setAta] = useState("");
  const [what_gov_abroad, setWga] = useState("");
  const [dept_when_arr_from_abroad, setDwafa] = useState("");
  const [need_to_go_abroad, setNtga] = useState("");
  const [credentials_for_abroad, setCfa] = useState("");

  const [submit_person_ticket, setSpt] = useState("");
  const [submit_person_name, setSpn] = useState("");

  const [submit_person_position, setSpp] = useState("");
  const [submit_person_dept, setSpd] = useState("");
  const [stuff_behavior, setSb] = useState("");

  const [date, setD] = useState("");
  const [submit_person1_ticket, setSp1t] = useState("");
  const [submit_person1_name, setSp1n] = useState("");
  const [submit_person1_position, setSp1p] = useState("");

  const [submit_person1_dept, setSp1d] = useState("");
  const [headmaster_ticket, setHt] = useState("");
  const [headmaster_name, setHn] = useState("");
  const [headmaster_position, setHp] = useState("");

  const [headmaster_dept, setHd] = useState("");
  const [headmaster_date, setHdd] = useState("");
  const [school_headmaster_ticket, setSht] = useState("");
  const [school_headmaster_name, setShn] = useState("");
  const [school_headmaster_position, setShp] = useState("");

  const [school_headmaster_dept, setShd] = useState("");
  const [school_headmaster_dept_date, setShdd] = useState("");

  //handling

  const handleNC = (e: any) => {
    setName(e.target.value);
  };

  const handleCN = (e: any) => {
    setChildName(e.target.value);
  };

  const handleON = (e: any) => {
    setOtherName(e.target.value);
  };

  const handleAge = (e: any) => {
    setAge(e.target.value);
  };

  const handleBD = (e: any) => {
    setBirthDate(e.target.value);
  };

  const handleBL = (e: any) => {
    setBirthLocation(e.target.value);
  };

  const handleReligion = (e: any) => {
    setReligion(e.target.value);
  };

  const handleNation = (e: any) => {
    setNation(e.target.value);
  };

  const handleNrc = (e: any) => {
    setNrc(e.target.value);
  };
  const handleHeight = (e: any) => {
    setHeight(e.target.value);
  };

  const handleWeight = (e: any) => {
    setWeight(e.target.value);
  };

  const handleHc = (e: any) => {
    setHairColor(e.target.value);
  };

  const handleEc = (e: any) => {
    setEyesColor(e.target.value);
  };

  const handlePs = (e: any) => {
    setProminentSign(e.target.value);
  };

  const handleDepartment = (e: any) => {
    setDepartment(e.target.value);
  };
  const handleSa = (e: any) => {
    setServiceAge(e.target.value);
  };

  const handleCa = (e: any) => {
    setCurrentAddress(e.target.value);
  };

  const handlePa = (e: any) => {
    setPermanentAddress(e.target.value);
  };

  const handleEducation = (e: any) => {
    setEducation(e.target.value);
  };

  const handleDegree = (e: any) => {
    setDegree(e.target.value);
  };
  const handleSp = (e: any) => {
    setSpecialization(e.target.value);
  };

  const handleDyr = (e: any) => {
    setDegreeYearReceived(e.target.value);
  };

  const handleGrade = (e: any) => {
    setGrade(e.target.value);
  };

  const handleFd = (e: any) => {
    setFirstDegree(e.target.value);
  };

  const handleGd = (e: any) => {
    setGraduateDegree(e.target.value);
  };

  const handleSchoola = (e: any) => {
    setSchoolAttended(e.target.value);
  };

  const handleFy = (e: any) => {
    setFromYears(e.target.value);
  };

  const handleFinishedy = (e: any) => {
    setFinishedYears(e.target.value);
  };

  const handleSc = (e: any) => {
    setSchoolLocation(e.target.value);
  };

  const handleSl = (e: any) => {
    setSchoolLevel(e.target.value);
  };

  const handleFya = (e: any) => {
    setFromYearAbroad(e.target.value);
  };

  const handleFiya = (e: any) => {
    setFinishedYearAbroad(e.target.value);
  };

  const handleCV = (e: any) => {
    setCountriesVisited(e.target.value);
  };

  const handleMov = (e: any) => {
    setMatterOfVisiting(e.target.value);
  };

  const handleDe = (e: any) => {
    setDepositExchange(e.target.value);
  };

  const handleFn = (e: any) => {
    setFatherName(e.target.value);
  };

  const handleFrn = (e: any) => {
    setFatherRelativeName(e.target.value);
  };

  const handleFrg = (e: any) => {
    setFatherRelativenessGender(e.target.value);
  };

  const handleFrc = (e: any) => {
    setFatherRelativenessCitizen(e.target.value);
  };

  const handleFrj = (e: any) => {
    setFatherRelativenessJob(e.target.value);
  };

  const handleFrl = (e: any) => {
    setFatherRelativnessLocation(e.target.value);
  };

  const handleFrnnote = (e: any) => {
    setFatherRelativenessNote(e.target.value);
  };

  const handleMn = (e: any) => {
    setMotherName(e.target.value);
  };

  const handleMrn = (e: any) => {
    setMotherRelativeName(e.target.value);
  };

  const handleMr = (e: any) => {
    setMotherRelativeness(e.target.value);
  };

  const handleMrg = (e: any) => {
    setMotherRelativenessGender(e.target.value);
  };

  const handleMrc = (e: any) => {
    setMotherRelativenessCitizen(e.target.value);
  };

  const handleMrjob = (e: any) => {
    setMotherRelativenessJob(e.target.value);
  };
  const handleMrl = (e: any) => {
    setMotherRelativenessLocation(e.target.value);
  };
  const handleMrnote = (e: any) => {
    setMotherRelativenessNote(e.target.value);
  };

  const handleOname = (e: any) => {
    setOverseaName(e.target.value);
  };

  const handleOrn = (e: any) => {
    setOverseaRelativeName(e.target.value);
  };
  const handleOr = (e: any) => {
    setOverseaRelativeness(e.target.value);
  };

  const handleOrg = (e: any) => {
    setOverseaRelativenessGender(e.target.value);
  };
  const handleOrc = (e: any) => {
    setOverseaRelativenessCitizen(e.target.value);
  };
  const handleOrj = (e: any) => {
    setOverseaRelativenessJob(e.target.value);
  };

  const handleOrl = (e: any) => {
    setOverseaRelativenessLocation(e.target.value);
  };
  const handleOrnote = (e: any) => {
    setOverseaRelativenessNote(e.target.value);
  };

  const handleLn = (e: any) => {
    setLoveName(e.target.value);
  };
  const handleLrn = (e: any) => {
    setLoveRelativeName(e.target.value);
  };

  const handleLr = (e: any) => {
    setLoveRelativeness(e.target.value);
  };
  const handleLrg = (e: any) => {
    setLoveRelativenessGender(e.target.value);
  };

  const handleLrc = (e: any) => {
    setLoveRelativenessCitizen(e.target.value);
  };
  const handleLrj = (e: any) => {
    setLoveRelativenessJob(e.target.value);
  };

  const handleLrl = (e: any) => {
    setLoveRelativenessLocation(e.target.value);
  };
  const handleLrnote = (e: any) => {
    setLoveRelativenessNote(e.target.value);
  };

  const handleLfn = (e: any) => {
    setLoveFatherName(e.target.value);
  };
  const handleLfrn = (e: any) => {
    setLoveFatherRelativeName(e.target.value);
  };

  const handleLfr = (e: any) => {
    setLoveFatherRelativeness(e.target.value);
  };
  const handleLfrg = (e: any) => {
    setLoveFatherRelativenessGender(e.target.value);
  };
  const handleLfrc = (e: any) => {
    setLoveFatherRelativenessCitizen(e.target.value);
  };
  const handleLfrj = (e: any) => {
    setLfrj(e.target.value);
  };

  const handleLfrl = (e: any) => {
    setLfrl(e.target.value);
  };

  const handleLfrnote = (e: any) => {
    setLfrn(e.target.value);
  };

  //love mother
  const handleLmn = (e: any) => {
    setLmn(e.target.value);
  };
  const handleLmrn = (e: any) => {
    setLmrn(e.target.value);
  };

  const handleLmr = (e: any) => {
    setLmr(e.target.value);
  };
  const handleLmrg = (e: any) => {
    setLmrg(e.target.value);
  };
  const handleLmrc = (e: any) => {
    setLmrc(e.target.value);
  };
  const handleLmrj = (e: any) => {
    setLmrj(e.target.value);
  };

  const handleLmrl = (e: any) => {
    setLmrl(e.target.value);
  };

  const handleLmrnote = (e: any) => {
    setLmrnote(e.target.value);
  };

  //child
  const handleCn = (e: any) => {
    setCnt(e.target.value);
  };
  const handleCrn = (e: any) => {
    setCrnn(e.target.value);
  };
  const handleCr = (e: any) => {
    setCr(e.target.value);
  };
  const handleCrg = (e: any) => {
    setCrg(e.target.value);
  };
  const handleCrc = (e: any) => {
    setCrc(e.target.value);
  };
  const handleCrj = (e: any) => {
    setCrj(e.target.value);
  };
  const handleCrl = (e: any) => {
    setCrl(e.target.value);
  };
  const handleCrnote = (e: any) => {
    setCrn(e.target.value);
  };
  const handleOrnn = (e: any) => {
    setOrnn(e.target.value);
  };
  const handleOrr = (e: any) => {
    setOrr(e.target.value);
  };
  const handleOrnation = (e: any) => {
    setOrn(e.target.value);
  };
  const handleOrjob = (e: any) => {
    setOrj(e.target.value);
  };
  const handleOrcc = (e: any) => {
    setOrcc(e.target.value);
  };
  const handleOrm = (e: any) => {
    setOrm(e.target.value);
  };
  const handleOrre = (e: any) => {
    setOrre(e.target.value);
  };
  const handleDat = (e: any) => {
    setDat(e.target.value);
  };
  const handleDatf = (e: any) => {
    setDatf(e.target.value);
  };
  const handleDp = (e: any) => {
    setDp(e.target.value);
  };
  const handleDatn = (e: any) => {
    setDatn(e.target.value);
  };
  const handleCt = (e: any) => {
    setCt(e.target.value);
  };
  const handleCf = (e: any) => {
    setCf(e.target.value);
  };
  const handleCation = (e: any) => {
    setCa(e.target.value);
  };
  const handleCnote = (e: any) => {
    setCn(e.target.value);
  };
  const handleDgy = (e: any) => {
    setDgy(e.target.value);
  };
  const handleWtd = (e: any) => {
    setWtd(e.target.value);
  };
  const handleDgn = (e: any) => {
    setDgn(e.target.value);
  };
  const handleGa = (e: any) => {
    setGa(e.target.value);
  };
  const handleRga = (e: any) => {
    setRga(e.target.value);
  };
  const handleAc = (e: any) => {
    setAc(e.target.value);
  };
  const handleAta = (e: any) => {
    setAta(e.target.value);
  };

  const handleWga = (e: any) => {
    setWga(e.target.value);
  };

  const handleDwafa = (e: any) => {
    setDwafa(e.target.value);
  };

  const handleNtga = (e: any) => {
    setNtga(e.target.value);
  };
  const handleCfa = (e: any) => {
    setCfa(e.target.value);
  };

  const handleSpt = (e: any) => {
    setSpt(e.target.value);
  };
  const handleSpn = (e: any) => {
    setSpn(e.target.value);
  };
  const handleSpp = (e: any) => {
    setSpp(e.target.value);
  };

  const handleSpd = (e: any) => {
    setSpd(e.target.value);
  };
  const handleSb = (e: any) => {
    setSb(e.target.value);
  };

  const handleDate = (e: any) => {
    setD(e.target.value);
  };
  const handleSp1t = (e: any) => {
    setSp1t(e.target.value);
  };

  const handleSp1n = (e: any) => {
    setSp1n(e.target.value);
  };
  const handleSp1p = (e: any) => {
    setSp1p(e.target.value);
  };

  const handleSp1d = (e: any) => {
    setSp1d(e.target.value);
  };

  const handleHt = (e: any) => {
    setHt(e.target.value);
  };
  const handleHn = (e: any) => {
    setHn(e.target.value);
  };

  const handleHp = (e: any) => {
    setHp(e.target.value);
  };
  const handleHd = (e: any) => {
    setHd(e.target.value);
  };

  const handleHdd = (e: any) => {
    setHdd(e.target.value);
  };
  const handleSht = (e: any) => {
    setSht(e.target.value);
  };

  const handleShn = (e: any) => {
    setShn(e.target.value);
  };

  const handleShp = (e: any) => {
    setShp(e.target.value);
  };

  const handleShd = (e: any) => {
    setShdd(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    /* const formData = new FormData();
    console.log(formData); */
    const formData = new URLSearchParams();

    formData.append("name", name);

    formData.append("child_name", child_name);

    formData.append("other_name", other_name);

    formData.append("age", age);
    formData.append("birth_date", birth_date);

    formData.append("birth_location", birth_location);

    formData.append("religion", religion);

    formData.append("nation", nation);
    formData.append("nrc", nrc);

    formData.append("height", height);
    formData.append("weight", weight);

    formData.append("hair_color", hair_color);
    formData.append("eyes_color", eyes_color);
    formData.append("prominent_sign", prominent_sign);

    formData.append("department", department);
    formData.append("service_age", service_age);
    formData.append("current_address", current_address);

    formData.append("permanent_address", permanent_address);
    formData.append("education", education);
    formData.append("degree", degree);
    formData.append("specialization", specialization);
    formData.append("degree_year_received", degree_year_received);

    formData.append("grade", grade);
    formData.append("first_degree", first_degree);
    formData.append("graduate_degree", graduate_degree);
    formData.append("school_attended", school_attended);
    formData.append("from_years", from_years);

    formData.append("finished_years", finished_years);
    formData.append("school_location", school_location);
    formData.append("school_level", school_level);

    formData.append("from_year_abroad", from_year_abroad);
    formData.append("finished_year_abroad", finished_year_abroad);
    formData.append("countries_visited", countries_visited);
    formData.append("matter_of_visiting", matter_of_visiting);

    formData.append("deposit_exchange", deposit_exchange);
    formData.append("father_name", father_name);
    formData.append("father_relative_name", father_relative_name);
    formData.append("father_relativeness", father_relativeness);
    formData.append("father_relativeness_gender", father_relativeness_gender);
    formData.append("father_relativeness_citizen", father_relativeness_citizen);

    formData.append("father_relativeness_job", father_relativeness_job);
    formData.append(
      "father_relativeness_location",
      father_relativeness_location
    );
    formData.append("father_relativeness_note", father_relativeness_note);
    formData.append("mother_name", mother_name);
    formData.append("mother_relative_name", mother_relative_name);
    formData.append("mother_relativeness", mother_relativeness);

    formData.append("mother_relativeness_gender", mother_relativeness_gender);
    formData.append("mother_relativeness_citizen", mother_relativeness_citizen);
    formData.append("mother_relativeness_job", mother_relativeness_job);
    formData.append(
      "mother_relativeness_location",
      mother_relativeness_location
    );

    formData.append("mother_relativeness_note", mother_relativeness_note);
    formData.append("oversea_name", oversea_name);
    formData.append("oversea_relative_name", oversea_relative_name);

    formData.append("oversea_relativeness", oversea_relativeness);
    formData.append("oversea_relativeness_gender", oversea_relativeness_gender);
    formData.append(
      "oversea_relativeness_citizen",
      oversea_relativeness_citizen
    );
    formData.append("oversea_relativeness_job", oversea_relativeness_job);

    formData.append(
      "oversea_relativeness_location",
      oversea_relativeness_location
    );

    formData.append("oversea_relativeness_note", oversea_relativeness_note);
    formData.append("love_name", love_name);
    formData.append("love_relative_name", love_relative_name);

    formData.append("love_relativeness", love_relativeness);
    formData.append("love_relativeness_gender", love_relativeness_gender);
    formData.append("love_relativeness_citizen", love_relativeness_citizen);

    formData.append("love_relativeness_job", love_relativeness_job);
    formData.append("love_relativeness_location", love_relativeness_location);
    formData.append("love_relativeness_note", love_relativeness_note);

    formData.append("love_father_name", love_father_name);
    formData.append("love_father_relative_name", love_father_relative_name);
    formData.append("love_father_relativeness", love_father_relativeness);

    formData.append(
      "love_father_relativeness_gender",
      love_father_relativeness_gender
    );
    formData.append(
      "love_father_relativeness_citizen",
      love_father_relativeness_citizen
    );
    formData.append(
      "love_father_relativeness_job",
      love_father_relativeness_job
    );
    formData.append(
      "love_father_relativeness_location",
      love_father_relativeness_location
    );
    formData.append(
      "love_father_relativeness_note",
      love_father_relativeness_note
    );
    formData.append("love_mother_name", love_mother_name);
    formData.append("love_mother_relative_name", love_mother_relative_name);
    formData.append("love_mother_relativeness", love_mother_relativeness);

    formData.append(
      "love_mother_relativeness_gender",
      love_mother_relativeness_gender
    );
    formData.append(
      "love_mother_relativeness_citizen",
      love_mother_relativeness_citizen
    );

    formData.append(
      "love_mother_relativeness_job",
      love_mother_relativeness_job
    );
    formData.append(
      "love_mother_relativeness_location",
      love_mother_relativeness_location
    );
    formData.append(
      "love_mother_relativeness_note",
      love_mother_relativeness_note
    );
    formData.append("child_name_t", child_name_t);
    formData.append("child_relative_name_n", child_relative_name_n);

    formData.append("child_relativeness", child_relativeness);
    formData.append("child_relativeness_gender", child_relativeness_gender);
    formData.append("child_relativeness_citizen", child_relativeness_citizen);
    formData.append("child_relativeness_job", child_relativeness_job);
    formData.append("child_relativeness_location", child_relativeness_location);
    formData.append("child_relativeness_note", child_relativeness_note);

    formData.append("oversea_relative_name_n", oversea_relative_name_n);
    formData.append(
      "oversea_relative_relativeness",
      oversea_relative_relativeness
    );
    formData.append("oversea_relative_nation", oversea_relative_nation);

    formData.append("oversea_relative_job", oversea_relative_job);
    formData.append(
      "oversea_relative_current_country",
      oversea_relative_current_country
    );

    formData.append("oversea_relative_matter", oversea_relative_matter);
    formData.append("oversea_relative_return", oversea_relative_return);
    formData.append("dept_action_taken", dept_action_taken);
    formData.append("dept_action_taken_fact", dept_action_taken_fact);
    formData.append("dept_punishment", dept_punishment);

    formData.append("dept_action_taken_note", dept_action_taken_note);
    formData.append("court_time", court_time);
    formData.append("court_fact", court_fact);
    formData.append("court_action", court_action);
    formData.append("court_note", court_note);

    formData.append("degree_give_year", degree_give_year);
    formData.append("what_type_degree", what_type_degree);
    formData.append("degree_give_note", degree_give_note);
    formData.append("go_abroad", go_abroad);
    formData.append("reason_go_abroad", reason_go_abroad);
    formData.append("abroad_country", abroad_country);

    formData.append("arrive_time_abroad", arrive_time_abroad);

    formData.append("what_gov_abroad", what_gov_abroad);

    formData.append("dept_when_arr_from_abroad", dept_when_arr_from_abroad);

    formData.append("need_to_go_abroad", need_to_go_abroad);
    formData.append("credentials_for_abroad", credentials_for_abroad);
    formData.append("submit_person_ticket", submit_person_ticket);
    formData.append("submit_person_name", submit_person_name);
    formData.append("submit_person_position", submit_person_position);
    formData.append("submit_person_dept", submit_person_dept);

    formData.append("stuff_behavior", stuff_behavior);
    formData.append("date", date);

    formData.append("submit_person1_ticket", submit_person1_ticket);
    formData.append("submit_person1_name", submit_person1_name);
    formData.append("submit_person1_position", submit_person1_position);

    formData.append("submit_person1_dept", submit_person1_dept);
    formData.append("headmaster_ticket", headmaster_ticket);
    formData.append("headmaster_name", headmaster_name);
    formData.append("headmaster_position", headmaster_position);

    formData.append("headmaster_dept", headmaster_dept);
    formData.append("headmaster_date", headmaster_date);
    formData.append("school_headmaster_ticket", school_headmaster_ticket);

    formData.append("school_headmaster_name", school_headmaster_name);
    formData.append("school_headmaster_position", school_headmaster_position);
    formData.append("school_headmaster_dept", school_headmaster_dept);
    formData.append("school_headmaster_dept_date", school_headmaster_dept_date);

    setName("");

    setChildName("");

    setOtherName("");
    setAge("");
    setBirthDate("");
    setBirthLocation("");
    setReligion("");
    setNation("");
    setNrc("");
    setHeight("");
    setWeight("");
    setHairColor("");
    setEyesColor("");
    setProminentSign("");
    setDepartment("");
    setServiceAge("");
    setCurrentAddress("");

    setPermanentAddress("");
    setEducation("");
    setDegree("");

    setSpecialization("");
    setDegreeYearReceived("");
    setGrade("");
    setFirstDegree("");

    setGraduateDegree("");
    setSchoolAttended("");

    setFromYears("");
    setFinishedYears("");
    setSchoolLocation("");

    setSchoolLevel("");
    setFromYearAbroad("");
    setFinishedYearAbroad("");

    setCountriesVisited("");
    setMatterOfVisiting("");
    setDepositExchange("");
    setFatherName("");
    setFatherRelativeName("");
    setFatherRelativeness("");
    setFatherRelativenessGender("");
    setFatherRelativenessCitizen("");
    setFatherRelativenessJob("");
    setFatherRelativnessLocation("");
    setFatherRelativenessNote("");
    setMotherName("");
    setMotherRelativeName("");
    setMotherRelativeness("");
    setMotherRelativenessGender("");
    setMotherRelativenessCitizen("");
    setMotherRelativenessJob("");
    setMotherRelativenessLocation("");
    setMotherRelativenessNote("");
    setOverseaName("");
    setOverseaRelativeName("");
    setOverseaRelativeness("");

    setOverseaRelativenessGender("");
    setOverseaRelativenessCitizen("");
    setOverseaRelativenessJob("");
    setOverseaRelativenessLocation("");
    setOverseaRelativenessNote("");
    setLoveName("");
    setLoveRelativeName("");
    setLoveRelativeness("");

    setLoveRelativenessGender("");
    setLoveRelativenessCitizen("");
    setLoveRelativenessJob("");
    setLoveRelativenessLocation("");
    setLoveRelativenessNote("");
    setLoveFatherName("");

    setLoveFatherRelativeName("");
    setLoveFatherRelativeness("");

    setLoveFatherRelativenessGender("");
    setLoveFatherRelativenessCitizen("");

    setLfrj("");
    setLfrl("");

    setLfrn("");
    setLmn("");
    setLmrn("");
    setLmr("");
    setLmrg("");

    setLmrc("");
    setLmrj("");
    setLmrl("");
    setLmrnote("");
    setCnt("");

    setCrnn("");

    setCr("");
    setCrg("");
    setCrc("");

    setCrj("");

    setCrl("");
    setCrn("");

    setOrnn("");

    setOrr("");
    setOrn("");

    setOrj("");

    setOrcc("");
    setOrm("");
    setOrre("");
    setDat("");

    setDatf("");
    setDp("");
    setDatn("");

    setCt("");
    setCf("");
    setCa("");

    setCn("");
    setDgy("");
    setWtd("");
    setDgn("");

    setGa("");
    setRga("");
    setAc("");
    setAta("");
    setWga("");
    setDwafa("");
    setNtga("");
    setCfa("");
    setSpt("");
    setSpn("");
    setSpp("");

    setSpd("");

    setSb("");
    setD("");
    setSp1t("");

    setSp1n("");
    setSp1p("");
    setSp1d("");
    setHt("");

    setHn("");
    setHp("");

    setHd("");
    setHdd("");

    setSht("");
    setShn("");
    setShp("");
    setShd("");
    setShdd("");

    /*  alert("Your data registered successfully!");
    Axios.post("http://localhost:8000/api/informations", data) //replace with formData
      .then((response) => {
        //const newItemId = response.data.id;
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data: ", error);
      }); */

    toast("Your data registered successfully! ");
    Axios.post("/api/information", formData)
      .then((response) => {
        console.log("Data sent successfully", response.data);
      })
      .catch((error) => {
        console.error("Error sending data", error);
      });
  };
  ///UI

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Hello </h1>
        {/* start */}
        <div className="form-group">
          <label htmlFor="name">အမည်</label>
          <input
            onChange={handleNC}
            id="name"
            value={name}
            type="text"
            name="name"
            // required
          />
        </div>
        {/*end*/}
        <div className="form-group">
          <label htmlFor="child_name">ငယ်နာမည်</label>
          <input
            onChange={handleCN}
            id="child_name"
            value={child_name}
            type="text"
            name="child_name"
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="other_name">Other name</label>
          <input
            onChange={handleON}
            id="other_name"
            value={other_name}
            type="text"
            name="other_name"
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            onChange={handleAge}
            id="age"
            value={age}
            type="text"
            name="age"
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth_date">birth-date</label>
          <input
            onChange={handleBD}
            id="birth_date"
            value={birth_date}
            type="text"
            name="birth_date"
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth_location">birth_location</label>
          <input
            onChange={handleBL}
            id="birth_location"
            value={birth_location}
            type="text"
            name="birth_location"
            // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birth_location">birth_location</label>
          <input
            onChange={handleBL}
            id="birth_location"
            value={birth_location}
            type="text"
            name="birth_location"
            // required
          />
        </div>

        {/*  //////// */}
        <div>
          <button type="submit" /* required */>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default PersonalDataForm;
