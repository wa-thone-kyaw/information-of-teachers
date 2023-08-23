import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
import { toast } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "next/router";
import { IoMdClose } from "react-icons/io";

const PersonalDataForm = () => {
  const handleClose = (e: any) => {
    setTimeout(() => {
      router.push("/");
    });
  };
  const [file, setFile] = useState(null);
  const [uploadedImagePath, setUploadedImagePath] = useState("");

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  //photo

  /*  const [selectedImage, setSelectedImage] = useState("");
  const handleImageChange = (e: any) => {
    setSelectedImage(e.target.files[0]);
  }; */
  const [customDepartment, setCustomDepartment] = useState("");
  const [departmentOptions, setDepartmentOptions] = useState([
    "Civil",
    "Mechanical",
    "Electrical Power",
    "Electronic",
    "Information Technology",
  ]);

  const handleSpdChange = (e: any) => {
    setSpd(e.target.value);
  };

  const handleCustomDepartmentChange = (e: any) => {
    setCustomDepartment(e.target.value);
  };

  const handleAddCustomDepartment = () => {
    if (customDepartment.trim() !== "") {
      setDepartmentOptions([...departmentOptions, customDepartment]);
      setSpd(customDepartment);
      setCustomDepartment("");
    }
  };
  const [name, setName] = useState("");

  const [child_name, setChildName] = useState("");

  const [other_name, setOtherName] = useState("");
  const [age, setAge] = useState("");
  /* const [birth_date, setBirthDate] = useState(""); */

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
  const [type_of_school, setTypeOfSchool] = useState("");
  const [school_location, setSchoolLocation] = useState("");

  const [school_level, setSchoolLevel] = useState("");

  const [from_year_abroad, setFromYearAbroad] = useState("");

  const [finished_year_abroad, setFinishedYearAbroad] = useState("");

  const [countries_visited, setCountriesVisited] = useState("");

  const [matter_of_visiting, setMatterOfVisiting] = useState("");

  const [deposit_exchange, setDepositExchange] = useState("");

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
  const [time_abroad, setTa] = useState("");
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

  const [submit_person_date, setSpdate] = useState("");
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

  /*  const handleBD = (e: any) => {
    setBirthDate(e.target.value);
  }; */

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

  const handleTypeOfSchool = (e: any) => {
    setTypeOfSchool(e.target.value);
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

  const handleFrn = (e: any) => {
    setFatherRelativeName(e.target.value);
  };

  const handleFrr = (e: any) => {
    setFatherRelativeness(e.target.value);
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
  const handleTa = (e: any) => {
    setTa(e.target.value);
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

  const handleSpdate = (e: any) => {
    setSpdate(e.target.value);
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

    //date picker

    /* const formData = new FormData();
    console.log(formData); */
    const formData = new URLSearchParams();

    formData.append("name", name);

    formData.append("child_name", child_name);

    formData.append("other_name", other_name);

    formData.append("age", age);
    /* formData.append("birth_date", birth_date); */

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
    formData.append("type_of_school", type_of_school);
    formData.append("school_location", school_location);
    formData.append("school_level", school_level);

    formData.append("from_year_abroad", from_year_abroad);
    formData.append("finished_year_abroad", finished_year_abroad);
    formData.append("countries_visited", countries_visited);
    formData.append("matter_of_visiting", matter_of_visiting);

    formData.append("deposit_exchange", deposit_exchange);

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
    formData.append("time_abroad", time_abroad);
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
    formData.append("submit_person_date", submit_person_date);

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
    //formData.append("image", file);

    setName("");

    setChildName("");

    setOtherName("");
    setAge("");
    /*  setBirthDate(""); */
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
    setTypeOfSchool("");
    setSchoolLocation("");

    setSchoolLevel("");
    setFromYearAbroad("");
    setFinishedYearAbroad("");

    setCountriesVisited("");
    setMatterOfVisiting("");
    setDepositExchange("");

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
    setTa("");
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
    setSpdate("");
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
        //setUploadedImagePath(response.data.imagePath);
      })
      .catch((error) => {
        console.error("Error sending data", error);
      });
    router.push("/ThankYou");
    /* setTimeout(() => {
      router.push("/ThankYou");
    }, 2000); */ // Redirect after 2 seconds
  };
  ///UI
  // const mystyle = {
  //   color: "blue",
  //   // backgroundColor: "DodgerBlue",
  //   padding: "50px",
  //   fontFamily: "Arial",
  //   textAlgin: "Center",
  // };
  // const yourStyle = {
  //   backgroundColor: "white",
  // };

  return (
    <div className="mx-auto w-full max-w-md  behavior: 'smooth',">
      <form
        // className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <button
          onClick={handleClose}
          className="

p1
border-0
hover:opacity-70
transition
absolute
left-9"
        >
          <IoMdClose size={30} />{" "}
        </button>
        <div className="mb-4">
          <h1
            className="text-center text-2xl font-bold mb-4"
            /* style={mystyle} */
          >
            ကိုယ်ရေးမှတ်တမ်း(၃၆)ချက်
          </h1>
        </div>
        {/* start */}
        <div
          // className="yourStyle"
          className="mb-4"
          /* className="form-group" */
        >
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            ၁။ အမည်
          </label>
          <input
            onChange={handleNC}
            id="name"
            value={name}
            type="text"
            name="name"
            // required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {/*end*/}
        <div className="form-group">
          <label
            htmlFor="child_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၂။ ငယ်နာမည်
          </label>
          <input
            onChange={handleCN}
            id="child_name"
            value={child_name}
            type="text"
            name="child_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="other_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၃။ အခြားအမည်များ (ရှိလျှင်)
          </label>
          <input
            onChange={handleON}
            id="other_name"
            value={other_name}
            type="text"
            name="other_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="age"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၄။ အသက် (မွေးနေ့သက္ကရာဇ်)
          </label>
          <input
            onChange={handleAge}
            id="age"
            value={age}
            type="date"
            name="age"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="birth_location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၅။ မွေးရာဇာတိ
          </label>
          <input
            onChange={handleBL}
            id="birth_location"
            value={birth_location}
            type="text"
            name="birth_location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="religion"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၆။ ကိုးကွယ်သည့်ဘာသာ
          </label>
          <input
            onChange={handleReligion}
            id="religion"
            value={religion}
            type="text"
            name="religion"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="religion"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၇။ လူမျိုး (ကပြားဖြစ်လျှင် မည်သည့်ကပြားဖြစ်ကြာင်းနှင့် ရှမ်း၊ ချင်း
            စသည့် လူမျိုးစုဖြစ်လျှင် လိုအပ်သလို ဖော်ပြရန် )။
          </label>
          <input
            onChange={handleNation}
            id="nation"
            value={nation}
            type="text"
            name="nation"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="nrc"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၈။ အမျိုးသားမှတ်ပုံတင်အမှတ်
          </label>

          <input
            onChange={handleNrc}
            id="nrc"
            value={nrc}
            type="text"
            name="nrc"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="height"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၉။ အရပ်
          </label>
          <input
            onChange={handleHeight}
            id="height"
            value={height}
            type="text"
            placeholder="cm"
            name="height"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="weight"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၀။ ကိုယ်အလေးချိန်
          </label>
          <input
            onChange={handleWeight}
            id="weight"
            value={weight}
            type="text"
            placeholder="lb"
            name="weight"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="hair_color"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၁။ ဆံပင်အရောင်
          </label>
          <input
            onChange={handleHc}
            id="hair_color"
            value={hair_color}
            type="text"
            name="hair_color"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="eyes_color"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၂။ မျက်စိအရောင်
          </label>
          <input
            onChange={handleEc}
            id="eyes_color"
            value={eyes_color}
            type="text"
            name="eyes_color"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="prominent_sign"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၃။ ထင်ရှားသည့်အမှတ်အသား
          </label>
          <input
            onChange={handlePs}
            id="prominent_sign"
            value={prominent_sign}
            type="text"
            name="prominent_sign"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="department"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၄။ အလုပ်အကိုင်နှင့်ဌာန
          </label>
          <input
            onChange={handleDepartment}
            id="department"
            value={department}
            type="text"
            name="department"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="service_age"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၅။ အမှုထမ်းသက်(ဝင်ရောက်သည့်နေ့စွဲ)
          </label>
          <input
            onChange={handleSa}
            id="service_age"
            value={service_age}
            type="date"
            name="service_age"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="current_address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၆။ လက်ရှိနေရပ်လိပ်စာအပြည့်အစုံ
          </label>
          <input
            onChange={handleCa}
            id="current_address"
            value={current_address}
            type="text"
            name="current_address"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="permanent_address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၇။ အမြဲတမ်းနေရပ်လိပ်စာ အပြည့်အစုံ
          </label>
          <input
            onChange={handlePa}
            id="permanent_address"
            value={permanent_address}
            type="text"
            name="permanent_address"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="education"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၈။ ပညာအရည်အချင်း
          </label>
          <input
            onChange={handleEducation}
            id="education"
            value={education}
            type="text"
            name="education"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="degree"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ဘွဲ့အမည်
          </label>
          <input
            onChange={handleDegree}
            id="degree"
            value={degree}
            type="text"
            name="degree"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="specialization"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            အထူးပြုဘာသာ
          </label>
          <input
            onChange={handleSp}
            id="specialization"
            value={specialization}
            type="text"
            name="specialization"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="degree_year_received"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ရရှိသည့်ခုနှစ်
          </label>
          <input
            onChange={handleDyr}
            id="degree_year_received"
            value={degree_year_received}
            type="date"
            name="degree_year_received"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="grade"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ရရှိသည့်အဆင့်
          </label>
          <input
            onChange={handleGrade}
            id="grade"
            value={grade}
            type="text"
            name="grade"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="first_degree"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            (က) ပထမဘွဲ့
          </label>
          <input
            onChange={handleFd}
            id="first_degree"
            value={first_degree}
            type="text"
            name="first_degree"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="graduate_degree"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            (ခ)ဘွဲ့လွန်ဘွဲ့
          </label>
          <input
            onChange={handleGd}
            id="graduate_degree"
            value={graduate_degree}
            type="text"
            name="graduate_degree"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="school_attended"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၁၉။ ပညာဆည်းပူးခဲ့သော၊ သင်တန်းတက်ခဲ့သော
            ကျောင်း၊ကောလိပ်၊တက္ကသိုလ်၊အလုပ်ငှာန ၊သင်တန်းများစသည်များ။
          </label>
          <input
            onChange={handleSchoola}
            id="school_attended"
            value={school_attended}
            type="text"
            name="school_attended"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="from_years"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မှ
          </label>
          <input
            onChange={handleFy}
            id="from_years"
            value={from_years}
            type="date"
            name="from_years"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="finished_years"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ထိ
          </label>
          <input
            onChange={handleFinishedy}
            id="finished_years"
            value={finished_years}
            type="date"
            name="finished_years"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="type_of_school"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကျောင်း၊တက္ကသိုလ်၊ အလုပ်ဌာန၊ သင်တန်း
          </label>
          <input
            onChange={handleTypeOfSchool}
            id="type_of_school"
            value={type_of_school}
            type="text"
            name="schootype_of_school"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="school_location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            တည်ရာအရပ်
          </label>
          <input
            onChange={handleSc}
            id="school_location"
            value={school_location}
            type="text"
            name="school_location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="school_level"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            အဆင့်အတန်း
          </label>
          <input
            onChange={handleSl}
            id="school_level"
            value={school_level}
            type="text"
            name="school_level"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <br />
        <div className="form-group">
          <label
            htmlFor="school_level"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ပညာစတင်ဆည်းပူးခဲ့သော နှစ်မှစ၍ ယနေ့အထိ ထမ်းဆောင်နေသော အလုပ်ဌာန
            အပါအဝင် ခုနှစ်သက္ကရာဇ် အဆက်ပြတ်မှု မရှိစေပဲ ဖြည့်သွင်းရန် ။
            အမှူထမ်းသက် ဖြည့်စွက်ရာတွင် ရက်၊လ၊ခုနှစ် ကိုပါ ဖော်ပြရန် ။
          </label>
        </div>
        <br />
        <div className="form-group">
          <label
            htmlFor="from_year_abroad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၂၀။ နိုင်ငံခြားသို့ ရောက်ဘူးခြင်း ရှိ-မရှိ ။
          </label>
        </div>
        <div className="form-group">
          <label
            htmlFor="from_year_abroad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကာလမှ
          </label>
          <input
            onChange={handleFya}
            id="from_year_abroad"
            value={from_year_abroad}
            type="date"
            name="from_year_abroad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="finished_year_abroad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကာလထိ
          </label>
          <input
            onChange={handleFiya}
            id="finished_year_abroad"
            value={finished_year_abroad}
            type="date"
            name="finished_year_abroad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="countries_visited"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            သွားရောက်သည့်နိုင်ငံများ
          </label>
          <input
            onChange={handleCV}
            id="countries_visited"
            value={countries_visited}
            type="text"
            name="countries_visited"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="matter_of_visiting"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            သွားရောက်သည့်ကိစ္စ
          </label>
          <input
            onChange={handleMov}
            id="matter_of_visiting"
            value={matter_of_visiting}
            type="text"
            name="matter_of_visiting"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="deposit_exchange"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နိုင်ငံခြားငွေမည်မျှ ထုတ်ယူခဲ့သည်
          </label>
          <input
            onChange={handleDe}
            id="deposit_exchange"
            value={deposit_exchange}
            type="text"
            name="deposit_exchange"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="father_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၂၁။ ဝန်ထမ်း၏အဘနှင့် အဘ၏ မောင်နှမအရင်းအချာများ။
          </label>
        </div>
        <div className="form-group">
          <label
            htmlFor="father_relative_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            အမည်(အခြားအမည်များရှိလျှင် ဖော်ပြရန်)
          </label>
          <input
            onChange={handleFrn}
            id="father_relative_name"
            value={father_relative_name}
            type="text"
            name="father_relative_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="father_relativeness"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {" "}
            တော်စပ်ပုံ
          </label>
          <input
            onChange={handleFrr}
            id="father_relativeness"
            value={father_relativeness}
            type="text"
            name="father_relativeness"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="father_relativeness_gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကျား၊မ
          </label>
          <input
            onChange={handleFrg}
            id="father_relativeness_gender"
            value={father_relativeness_gender}
            type="text"
            name="father_relativeness_gender"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="father_relativeness_citizen"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မည်သည့်နိုင်ငံသား
          </label>
          <input
            onChange={handleFrc}
            id="father_relativeness_citizen"
            value={father_relativeness_citizen}
            type="text"
            name="father_relativeness_citizen"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="father_relativeness_job"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            *အလုပ်အကိုင်
          </label>
          <input
            onChange={handleFrj}
            id="father_relativeness_job"
            value={father_relativeness_job}
            type="text"
            name="father_relativeness_job"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="father_relativeness_location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နေရပ်
          </label>
          <input
            onChange={handleFrl}
            id="father_relativeness_location"
            value={father_relativeness_location}
            type="text"
            name="father_relativeness_location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="father_relativeness_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            **မှတ်ချက်
          </label>
          <input
            onChange={handleFrnnote}
            id="father_relativeness_note"
            value={father_relativeness_note}
            type="text"
            name="father_relativeness_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="mother_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ၂၂။ ဝန်ထမ်း၏အမိနှင့် အမိ၏မောင်နှမ အရင်းအချာများ။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            အမည် (အခြားအမည်များ ရှိလျှင်လည်းဖော်ပြရန် )
          </label>
          <input
            onChange={handleMrn}
            id="mother_relative_name"
            value={mother_relative_name}
            type="text"
            name="mother_relative_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor=" mother_relativeness"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            တော်စပ်ပုံ
          </label>
          <input
            onChange={handleMr}
            id="mother_relativeness"
            value={mother_relativeness}
            type="text"
            name="mother_relativeness"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="mother_relativeness_gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကျား၊မ
          </label>
          <input
            onChange={handleMrg}
            id="mother_relativeness_gender"
            value={mother_relativeness_gender}
            type="text"
            name="mother_relativeness_gender"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="mother_relativeness_citizen"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မည်သည့်နိုင်ငံသား
          </label>
          <input
            onChange={handleMrc}
            id="mother_relativeness_citizen"
            value={mother_relativeness_citizen}
            type="text"
            name="mother_relativeness_citizen"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="mother_relativeness_job"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            *အလုပ်အကိုင်
          </label>
          <input
            onChange={handleMrjob}
            id="mother_relativeness_job"
            value={mother_relativeness_job}
            type="text"
            name="mother_relativeness_job"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="mother_relativeness_location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နေရပ်
          </label>
          <input
            onChange={handleMrl}
            id="mother_relativeness_location"
            value={mother_relativeness_location}
            type="text"
            name="mother_relativeness_location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="mother_relativeness_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            **မှတ်ချက်
          </label>
          <input
            onChange={handleMrnote}
            id="mother_relativeness_note"
            value={mother_relativeness_note}
            type="text"
            name="mother_relativeness_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <br />
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            *အလုပ်အကိုင်ကို ဖော်ပြရာတွင် လက်ရှိ နှင့် အငြိမ်းစားယူပြီးလျှင်
            အငြိမ်းစားမယူမီ နောက်ဆုံးရာထူးနှင့် ဌာနကို ဖော်ပြရန် ၊
            ကုန်သည်ဖြစ်ပါက မည်သည့် ကုန်ပစ္စည်းဖြစ်ကြောင်း ဖော်ပြရန် ။
          </label>
        </div>
        <br />
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ** ကွယ်လွန်ပီးဖြစ်လျှင် မကွယ်လွန်မီ နောက်ဆုံး လုပ်ကိုင်ခဲ့သော
            အလုပ်အကိုင် ၊နောက်ဆုံးနေခဲ့သော လိပ်စာအပြည့်အစုံကို ဖော်ပြရန်နှင့်
            မှတ်ချက်ဇယားတွင် ကွယ်လွန်သော ခုနှစ်သက္ကရာဇ်ကို ဖော်ပြရန် ။
          </label>
        </div>
        <br />
        {/*  //oversea_ */}
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၂၃။ နိုင်ငံခြားသွားမည့် သူ၏မောင်နှမ အရင်းအချာများ။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            အမည် (အခြားအမည်များ ရှိလျှင်လည်းဖော်ပြရန် )
          </label>
          <input
            onChange={handleOrn}
            id="oversea_relative_name"
            value={oversea_relative_name}
            type="text"
            name="oversea_relative_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relativeness"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            တော်စပ်ပုံ
          </label>
          <input
            onChange={handleOr}
            id="oversea_relativeness"
            value={oversea_relativeness}
            type="text"
            name="oversea_relativeness"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relativeness_gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကျား၊မ
          </label>
          <input
            onChange={handleOrg}
            id="oversea_relativeness_gender"
            value={oversea_relativeness_gender}
            type="text"
            name="oversea_relativeness_gender"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relativeness_citizen"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မည်သည့်နိုင်ငံသား
          </label>
          <input
            onChange={handleOrc}
            id="oversea_relativeness_citizen"
            value={oversea_relativeness_citizen}
            type="text"
            name="oversea_relativeness_citizen"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relativeness_job"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            *အလုပ်အကိုင်
          </label>
          <input
            onChange={handleOrj}
            id="oversea_relativeness_job"
            value={oversea_relativeness_job}
            type="text"
            name="oversea_relativeness_job"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relativeness_location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နေရပ်
          </label>
          <input
            onChange={handleOrl}
            id="oversea_relativeness_location"
            value={oversea_relativeness_location}
            type="text"
            name="oversea_relativeness_location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relativeness_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            **မှတ်ချက်
          </label>
          <input
            onChange={handleOrnote}
            id="oversea_relativeness_note"
            value={oversea_relativeness_note}
            type="text"
            name="oversea_relativeness_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        {/*  */}
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၂၄ ။ဇနီး၊ခင်ပွန်းနှင့် ၎င်း၏မောင် နှမအရင်းအချာများ။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            အမည် (အခြားအမည်များ ရှိလျှင်လည်းဖော်ပြရန် )
          </label>
          <input
            onChange={handleLrn}
            id="love_relative_name"
            value={love_relative_name}
            type="text"
            name="love_relative_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_relativeness"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            တော်စပ်ပုံ
          </label>
          <input
            onChange={handleLr}
            id="love_relativeness"
            value={love_relativeness}
            type="text"
            name="love_relativeness"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_relativeness_gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကျား၊မ
          </label>
          <input
            onChange={handleLrg}
            id="love_relativeness_gender"
            value={love_relativeness_gender}
            type="text"
            name="love_relativeness_gender"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_relativeness_citizen"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မည်သည့်နိုင်ငံသား
          </label>
          <input
            onChange={handleLrc}
            id="love_relativeness_citizen"
            value={love_relativeness_citizen}
            type="text"
            name="love_relativeness_citizen"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_relativeness_job"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            *အလုပ်အကိုင်
          </label>
          <input
            onChange={handleLrj}
            id="love_relativeness_job"
            value={love_relativeness_job}
            type="text"
            name="love_relativeness_job"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_relativeness_location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နေရပ်
          </label>
          <input
            onChange={handleLrl}
            id="love_relativeness_location"
            value={love_relativeness_location}
            type="text"
            name="love_relativeness_location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_relativeness_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            **မှတ်ချက်
          </label>
          <input
            onChange={handleLrnote}
            id="love_relativeness_note"
            value={love_relativeness_note}
            type="text"
            name="love_relativeness_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        {/*  */}
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၂၅။ ဇနီး၊ခင်ပွန်း၏အဘနှင့် မောင်နှမအရင်းအချာများ။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            အမည် (အခြားအမည်များ ရှိလျှင်လည်းဖော်ပြရန် )
          </label>
          <input
            onChange={handleLfrn}
            id="love_father_relative_name"
            value={love_father_relative_name}
            type="text"
            name="love_father_relative_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_father_relativeness"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            တော်စပ်ပုံ
          </label>
          <input
            onChange={handleLfr}
            id="love_father_relativeness"
            value={love_father_relativeness}
            type="text"
            name="love_father_relativeness"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_father_relativeness_gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကျား၊မ
          </label>
          <input
            onChange={handleLfrg}
            id="love_father_relativeness_gender"
            value={love_father_relativeness_gender}
            type="text"
            name="love_father_relativeness_gender"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_father_relativeness_citizen"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မည်သည့်နိုင်ငံသား
          </label>
          <input
            onChange={handleLfrc}
            id="love_father_relativeness_citizen"
            value={love_father_relativeness_citizen}
            type="text"
            name="love_father_relativeness_citizen"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_father_relativeness_job"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            *အလုပ်အကိုင်
          </label>
          <input
            onChange={handleLfrj}
            id="love_father_relativeness_job"
            value={love_father_relativeness_job}
            type="text"
            name="love_father_relativeness_job"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_father_relativeness_location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နေရပ်
          </label>
          <input
            onChange={handleLfrl}
            id="love_father_relativeness_location"
            value={love_father_relativeness_location}
            type="text"
            name="love_father_relativeness_location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_father_relativeness_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            **မှတ်ချက်
          </label>
          <input
            onChange={handleLfrnote}
            id="love_father_relativeness_note"
            value={love_father_relativeness_note}
            type="text"
            name="love_father_relativeness_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၂၆။ ဇနီး၊ခင်ပွန်း၏အမိနှင့် မောင်နှမအရင်းအချာများ။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            အမည် (အခြားအမည်များ ရှိလျှင်လည်းဖော်ပြရန် )
          </label>
          <input
            onChange={handleLmrn}
            id="love_mother_relative_name"
            value={love_mother_relative_name}
            type="text"
            name="love_mother_relative_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_mother_relativeness"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            တော်စပ်ပုံ
          </label>
          <input
            onChange={handleLmr}
            id="love_mother_relativeness"
            value={love_mother_relativeness}
            type="text"
            name="love_mother_relativeness"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_mother_relativeness_gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကျား၊မ
          </label>
          <input
            onChange={handleLmrg}
            id="love_mother_relativeness_gender"
            value={love_mother_relativeness_gender}
            type="text"
            name="love_mother_relativeness_gender"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_mother_relativeness_citizen"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မည်သည့် နိုင်ငံသား
          </label>
          <input
            onChange={handleLmrc}
            id="love_mother_relativeness_citizen"
            value={love_mother_relativeness_citizen}
            type="text"
            name="love_mother_relativeness_citizen"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_mother_relativeness_job"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            *အလုပ်အကိုင်
          </label>
          <input
            onChange={handleLmrj}
            id="love_mother_relativeness_job"
            value={love_mother_relativeness_job}
            type="text"
            name="love_mother_relativeness_job"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_mother_relativeness_location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နေရပ်
          </label>
          <input
            onChange={handleLmrl}
            id="love_mother_relativeness_location"
            value={love_mother_relativeness_location}
            type="text"
            name="love_mother_relativeness_location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="love_mother_relativeness_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            **မှတ်ချက်
          </label>
          <input
            onChange={handleLmrnote}
            id="love_mother_relativeness_note"
            value={love_mother_relativeness_note}
            type="text"
            name="love_mother_relativeness_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၂၇။ သား သမီးများနှင့် ၎င်းတို့၏ ဇနီး၊ခင်ပွန်း။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            အမည် (အခြားအမည်များ ရှိလျှင်လည်းဖော်ပြရန် )
          </label>
          <input
            onChange={handleCrn}
            id="child_relative_name_n"
            value={child_relative_name_n}
            type="text"
            name="child_relative_name_n"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="child_relativeness"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            တော်စပ်ပုံ
          </label>
          <input
            onChange={handleCr}
            id="child_relativeness"
            value={child_relativeness}
            type="text"
            name="child_relativeness"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="child_relativeness_gender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ကျား၊မ
          </label>
          <input
            onChange={handleCrg}
            id="child_relativeness_gender"
            value={child_relativeness_gender}
            type="text"
            name="child_relativeness_gender"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="child_relativeness_citizen"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မည်သည့်နိုင်ငံသား
          </label>
          <input
            onChange={handleCrc}
            id="child_relativeness_citizen"
            value={child_relativeness_citizen}
            type="text"
            name="child_relativeness_citizen"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="child_relativeness_job"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            *အလုပ်အကိုင်
          </label>
          <input
            onChange={handleCrj}
            id="child_relativeness_job"
            value={child_relativeness_job}
            type="text"
            name="child_relativeness_job"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="child_relativeness_location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နေရပ်
          </label>
          <input
            onChange={handleCrl}
            id="child_relativeness_location"
            value={child_relativeness_location}
            type="text"
            name="child_relativeness_location"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="child_relativeness_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            **မှတ်ချက်
          </label>
          <input
            onChange={handleCrnote}
            id="child_relativeness_note"
            value={child_relativeness_note}
            type="text"
            name="child_relativeness_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၂၈။ နိုင်ငံခြားတွင်ရာက်ရှိနေကြသည့် ဆွေမျိုးများ။**
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            အမည် (အခြားအမည်များ ရှိလျှင်လည်းဖော်ပြရန် )
          </label>
          <input
            onChange={handleOrnn}
            id="oversea_relative_name_n"
            value={oversea_relative_name_n}
            type="text"
            name="oversea_relative_name_n"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relative_relativeness"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            တော်စပ်ပုံ
          </label>
          <input
            onChange={handleOrr}
            id="oversea_relative_relativeness"
            value={oversea_relative_relativeness}
            type="text"
            name="oversea_relative_relativeness"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relative_nation"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မည်သည့်နိုင်ငံသား
          </label>
          <input
            onChange={handleOrnation}
            id="oversea_relative_nation"
            value={oversea_relative_nation}
            type="text"
            name="oversea_relative_nation"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relative_job"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            အလုပ်အကိုင်
          </label>
          <input
            onChange={handleOrjob}
            id="oversea_relative_job"
            value={oversea_relative_job}
            type="text"
            name="oversea_relative_job"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relative_current_country"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ရောက်ရှိနေသည့်နိုင်ငံ
          </label>
          <input
            onChange={handleOrcc}
            id="oversea_relative_current_country"
            value={oversea_relative_current_country}
            type="text"
            name="oversea_relative_current_country"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>{" "}
        <div className="form-group">
          <label
            htmlFor="oversea_relative_matter"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            သွားရာက်သည့်ကိစ္စ
          </label>
          <input
            onChange={handleOrm}
            id="oversea_relative_matter"
            value={oversea_relative_matter}
            type="text"
            name="oversea_relative_matter"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relative_return"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ပြန်လည်ရောက်ရှိမယ့် ကာလ
          </label>
          <input
            onChange={handleOrre}
            id="oversea_relative_return"
            value={oversea_relative_return}
            type="date"
            name="oversea_relative_return"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <br />
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            *အလုပ်အကိုင်ကို ဖော်ပြရာတွင် လက်ရှိ နှင့် အငြိမ်းစားယူပြီးလျှင်
            အငြိမ်းစားမယူမီ နောက်ဆုံးရာထူးနှင့် ဌာနကို ဖော်ပြရန် ၊
            ကုန်သည်ဖြစ်ပါက မည်သည့် ကုန်ပစ္စည်းဖြစ်ကြောင်း ဖော်ပြရန် ။
          </label>
        </div>
        <br />
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ** ကွယ်လွန်ပီးဖြစ်လျှင် မကွယ်လွန်မီ နောက်ဆုံး လုပ်ကိုင်ခဲ့သော
            အလုပ်အကိုင် ၊နောက်ဆုံးနေခဲ့သော လိပ်စာအပြည့်အစုံကို ဖော်ပြရန်နှင့်
            မှတ်ချက်ဇယားတွင် ကွယ်လွန်သော ခုနှစ်သက္ကရာဇ်ကို ဖော်ပြရန်၊အမှတ်စဉ် ၂၇
            ရှိဇယားတွင် သား၊သမီးများအတွက် တက်ရောက်နေသော ကျောင်း ၊အဆင့်အတန်းနှင့်
            အဓိကဘာသာရပ်ကို ဖော်ပြရန် ။
          </label>
        </div>
        <br />
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            *** နိုင်ငံခြားတွင်ရာက်ရှိနေသော ဆွေမျိုးများနှင့် ပက်သက်၍ ဇယားတွင်
            ပြည့်စုံမှန်ကန်စွာ ဖြည့်သွင်းရန် ၊ ကွယ်လွန်သူများအတွက်
            မကွယ်လွန်မီနောက်ဆုံး လုပ်ကိုင်ခဲ့သော အလုပ်အကိုင် ၊ နောက်ဆုံးနေခဲ့သော
            နေရပ်လိပ်စာအပြည့်အစုံကို ဖော်ပြရန် ။
          </label>
        </div>
        <br />
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၂၉။ ဌာန ဆိုင်ရာ အရေးယူခံရခြင်း ရှိ-မရှိ ။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            အရေးယူခံရသည့် ကာလ
          </label>
          <input
            onChange={handleDat}
            id="dept_action_taken"
            value={dept_action_taken}
            type="date"
            name="dept_action_taken"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="oversea_relative_relativeness"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            အရေးယူခံရသည့် အကြောင်းကိစ္စ
          </label>
          <input
            onChange={handleDatf}
            id="dept_action_taken_fact"
            value={dept_action_taken_fact}
            type="text"
            name="dept_action_taken_fact"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="dept_punishment"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ချမှတ်ခံရသည့်ပြစ်ဒဏ်
          </label>
          <input
            onChange={handleDp}
            id="dept_punishment"
            value={dept_punishment}
            type="text"
            name="dept_punishment"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="dept_action_taken_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မှတ်ချက်
          </label>
          <input
            onChange={handleDatn}
            id="dept_action_taken_note"
            value={dept_action_taken_note}
            type="text"
            name="dept_action_taken_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၃၀။ တရားရုံးတွင် တရားစွဲ ခံရဖူးခြင်း ရှိ-မရှိ ။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            တရားစွဲဆိုခြင်းခံရသည့် ကာလ
          </label>
          <input
            onChange={handleCt}
            id="court_time"
            value={court_time}
            type="date"
            name="court_time"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="court_fact"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            တရားစွဲဆိုခြင်း ခံရသည့်အကြောင်းကိစ္စနှင့် စွဲဆိုခံရသည့်ဥပဒေပုဒ်မ
          </label>
          <input
            onChange={handleCf}
            id="court_fact"
            value={court_fact}
            type="text"
            name="court_fact"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="court_action"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ချမှတ်ခံရသည့်ပြစ်ဒဏ်
          </label>
          <input
            onChange={handleCation}
            id="court_action"
            value={court_action}
            type="text"
            name="court_action"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="court_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မှတ်ချက်
          </label>
          <input
            onChange={handleCnote}
            id="court_note"
            value={court_note}
            type="text"
            name="court_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၃၁။ ဘွဲ့၊တံဆိပ် ချီးမြှင့်ခံရခြင်းရှိ-မရှိ ။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ချီးမြှင့်ခံရသည့်ကာလ
          </label>
          <input
            onChange={handleDgy}
            id="degree_give_year"
            value={degree_give_year}
            type="date"
            name="degree_give_year"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="what_type_degree"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ချီးမြှင့်ခံရသည့် ဘွဲ့၊တံဆိပ်အမျိုးအစား
          </label>
          <input
            onChange={handleWtd}
            id="what_type_degree"
            value={what_type_degree}
            type="text"
            name="what_type_degree"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="degree_give_note"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မှတ်ချက်
          </label>
          <input
            onChange={handleDgn}
            id="degree_give_note"
            value={degree_give_note}
            type="text"
            name="degree_give_note"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၃၂။ နိုင်ငံခြားသို့ သွားရောက်မည့် ကိစ္စ။
          </label>
        </div>
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            သင်ကြားမည့် ဘာသာရပ်နှင့် အဆင့်၊ တက်ရောက်မည့် သင်တန်း ၊ သို့မဟုတ်
            အခြားကိစ္စ
          </label>
          <input
            onChange={handleRga}
            id="reason_go_abroad"
            value={reason_go_abroad}
            type="text"
            name="reason_go_abroad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="abroad_country"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            စေလွှတ်သည့်နိုင်ငံ
          </label>
          <input
            onChange={handleAc}
            id="abroad_country"
            value={abroad_country}
            type="text"
            name="abroad_country"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="time_abroad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            အချိန်ကာလ
          </label>
          <input
            onChange={handleTa}
            id="time_abroad"
            value={time_abroad}
            type="date"
            name="time_abroad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>{" "}
        <div className="form-group">
          <label
            htmlFor="arrive_time_abroad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နိုင်ငံခြားသို့ရောက်ရမည့်နေ့
          </label>
          <input
            onChange={handleAta}
            id="arrive_time_abroad"
            value={arrive_time_abroad}
            type="date"
            name="arrive_time_abroad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="what_gov_abroad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            မည်သည့် အစိုးရအဖွဲ့အစည်းအထောက်အပံ့
          </label>
          <input
            onChange={handleWga}
            id="what_gov_abroad"
            value={what_gov_abroad}
            type="text"
            name="what_gov_abroad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="dept_when_arr_from_abroad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ပြန်လည်ရောက်ရှိလျှင် အမှု ထမ်းမည့် ဌာန၊တာဝန်
          </label>
          <input
            onChange={handleDwafa}
            id="dept_when_arr_from_abroad"
            value={dept_when_arr_from_abroad}
            type="text"
            name="dept_when_arr_from_abroad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="need_to_go_abroad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            သွား ရောက်မည့် နိုင်ငံ
          </label>
          <input
            onChange={handleNtga}
            id="need_to_go_abroad"
            value={need_to_go_abroad}
            type="text"
            name="need_to_go_abroad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="credentials_for_abroad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            နိုင်ငံခြားသို့သွားရာက်မည့် ကိစ္စနှင့်အထောက်အထားများ
          </label>
          <input
            onChange={handleCfa}
            id="credentials_for_abroad"
            value={credentials_for_abroad}
            type="text"
            name="credentials_for_abroad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <br />
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ၃၃။ အထက်ပါ အချက်အလက်များကို မှန်ကန်စွာ ဖြည့်သွင်း ရေးသားထားပါ
            ကြောင်း ကိုယ်တိုင် လက်မှတ် ရေးထိုးပါသည်။
          </label>
        </div>
        <br />
        <div className="form-group">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ရက်စွဲ
          </label>
          <input
            onChange={handleSpdate}
            id="submit_person_date"
            value={submit_person_date}
            type="date"
            name="submit_person_date"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
          {/*   <DatePicker selected={selectedDate} onChange={handleDateChange} />
          {selectedDate && (
            <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
          )} */}
        </div>
        <div className="form-group">
          <label
            htmlFor="submit_person_ticket"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            လျှောက်ထားသူလက်မှတ်
          </label>
          <input
            onChange={handleSpt}
            id="submit_person_ticket"
            value={submit_person_ticket}
            type="text"
            name="submit_person_ticket"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="submit_person_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            အမည်
          </label>
          <input
            onChange={handleSpn}
            id="submit_person_name"
            value={submit_person_name}
            type="text"
            name="submit_person_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="submit_person_position"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ရာထူး
          </label>
          <input
            onChange={handleSpp}
            id="submit_person_position"
            value={submit_person_position}
            type="text"
            name="submit_person_position"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // required
          />
        </div>
        <div>
          <div className="form-group">
            <label
              htmlFor="submit_person_dept"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              ဌာန
            </label>
            <select
              id="submit_person_dept"
              value={submit_person_dept}
              onChange={handleSpdChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="">Select Department</option>
              {departmentOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div className="form-group">
            <div className="flex">
              <input
                id="custom_department"
                value={customDepartment}
                placeholder="ဌာန များတွင် မပါဝင်ပါက ထည့်သွင်းရန်"
                onChange={handleCustomDepartmentChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                onClick={handleAddCustomDepartment}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        {/* <div>
          <h1>Image Upload</h1>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>

          {uploadedImagePath && (
            <div>
              <h2>Uploaded Image</h2>
              <img src={uploadedImagePath} alt="Uploaded" />
            </div>
          )}
        </div> */}
        {/*     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-800 to-indigo-700">
          <div className="max-w-3xl p-8 bg-white shadow-lg rounded-md text-center"> */}
        {/* ... other content ...}
            <div className="mb-6">
              <label htmlFor="image" className="text-gray-800">
                Upload Image:
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1"
              />
            </div>
          </div>
        </div>
        {/*  //////// */}
        <br />
        <label>
          <input
            type="checkbox"
            name="human_verification"
            required
            className="text-black font-bold text-lg"
          />
          I am not a robot
        </label>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-green-400 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            /* className=" bg-blue-500 hover:bg-rose-500 text-white font-bold w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" */
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default PersonalDataForm;
